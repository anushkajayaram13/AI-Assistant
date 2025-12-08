const Parser = require('node-tree-sitter');
const JavaScript = require('tree-sitter-javascript');
const fs = require('fs');
const path = require('path');

const parser = new Parser();
parser.setLanguage(JavaScript);

const folderPath = __dirname;

fs.readdirSync(folderPath).forEach(file => {
  if (file.endsWith('.js')) { // change extension based on your code
    const code = fs.readFileSync(path.join(folderPath, file), 'utf8');
    const tree = parser.parse(code);
    console.log(`\n--- Parsed: ${file} ---`);
    console.log(tree.rootNode.toString());
  }
});