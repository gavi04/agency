const fs = require('fs');

function extractText(file, outFile) {
  const html = fs.readFileSync(file, 'utf8');
  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi, '\n\n=== $2 ===\n\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '• $1\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();

  fs.writeFileSync(outFile, text);
  console.log(`Saved ${outFile}, length:`, text.length);
}

extractText('scratch/hub_template.html', 'scratch/hub_clean.txt');
extractText('scratch/ca_template.html', 'scratch/ca_clean.txt');
