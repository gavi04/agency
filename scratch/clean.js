const fs = require('fs');

if (fs.existsSync('app/icon.svg')) {
  fs.unlinkSync('app/icon.svg');
  console.log('Removed app/icon.svg');
}

if (fs.existsSync('.next')) {
  fs.rmSync('.next', { recursive: true, force: true });
  console.log('Cleared .next directory');
}
