const fs = require('fs');

const hub = fs.readFileSync('scratch/unpacked_81486ede.html', 'utf8');

// Strip tags and clean whitespace, but keep headings and structure
// Let's extract clean readable text
const text = hub
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<svg[\s\S]*?<\/svg>/gi, '')
  .replace(/<\/h[1-6]>/gi, '\n---HEADING-END---\n')
  .replace(/<h[1-6][^>]*>/gi, '\n---HEADING-START---\n')
  .replace(/<\/p>/gi, '\n\n')
  .replace(/<\/li>/gi, '\n')
  .replace(/<li[^>]*>/gi, '• ')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/\n{3,}/g, '\n\n')
  .trim();

fs.writeFileSync('scratch/hub_content.txt', text);
console.log('Saved hub_content.txt, length:', text.length);
