const fs = require('fs');
const zlib = require('zlib');

const html = fs.readFileSync('Envesty Automation Services – Landing Page.html', 'utf8');

// Find manifest and template
const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);

if (manifestMatch) {
  const manifest = JSON.parse(manifestMatch[1]);
  for (const [uuid, entry] of Object.entries(manifest)) {
    if (entry.mime === 'text/html' || entry.mime === 'text/plain') {
      let buf = Buffer.from(entry.data, 'base64');
      if (entry.compressed) {
        buf = zlib.gunzipSync(buf);
      }
      const text = buf.toString('utf8');
      fs.writeFileSync(`scratch/unpacked_${uuid.slice(0, 8)}.html`, text);
      console.log(`Saved unpacked_${uuid.slice(0, 8)}.html, length:`, text.length);
    }
  }
}

if (templateMatch) {
  const template = JSON.parse(templateMatch[1]);
  fs.writeFileSync('scratch/template.html', template);
  console.log('Saved template.html, length:', template.length);
}
