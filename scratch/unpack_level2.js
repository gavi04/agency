const fs = require('fs');
const zlib = require('zlib');

function unpackFile(filename, prefix) {
  const html = fs.readFileSync(filename, 'utf8');
  const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
  const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);

  if (templateMatch) {
    try {
      const template = JSON.parse(templateMatch[1]);
      fs.writeFileSync(`scratch/${prefix}_template.html`, template);
      console.log(`Saved ${prefix}_template.html, length:`, template.length);
    } catch (e) {
      console.error(e);
    }
  }

  if (manifestMatch) {
    try {
      const manifest = JSON.parse(manifestMatch[1]);
      for (const [uuid, entry] of Object.entries(manifest)) {
        if (entry.mime === 'text/html' || entry.mime === 'text/plain') {
          let buf = Buffer.from(entry.data, 'base64');
          if (entry.compressed) {
            buf = zlib.gunzipSync(buf);
          }
          const text = buf.toString('utf8');
          fs.writeFileSync(`scratch/${prefix}_${uuid.slice(0, 8)}.html`, text);
          console.log(`Saved ${prefix}_${uuid.slice(0, 8)}.html, length:`, text.length);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}

unpackFile('scratch/unpacked_81486ede.html', 'hub');
unpackFile('scratch/unpacked_0af8e1bb.html', 'ca');
