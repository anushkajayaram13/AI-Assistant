
const fs = require("fs");
const Parser = require("tree-sitter");

// Language imports
const JavaScript = require("tree-sitter-javascript");
const Python = require("tree-sitter-python");
const Go = require("tree-sitter-go");
const Java = require("tree-sitter-java");
const TypeScript = require("tree-sitter-typescript").typescript;

// Map extensions → tree-sitter language
const LANGUAGE_MAP = {
  ".js": JavaScript,
  ".py": Python,
  ".go": Go,
  ".java": Java,
  ".ts": TypeScript,
};

// Convert AST node → JSON including metadata
function nodeToJson(node, source) {
  return {
    type: node.type,
    text: source.slice(node.startIndex, node.endIndex),
    start: {
      row: node.startPosition.row,
      column: node.startPosition.column
    },
    end: {
      row: node.endPosition.row,
      column: node.endPosition.column
    },
    children: node.children.map(child => nodeToJson(child, source))
  };
}

// Main parse function
function parseFile(filepath) {
  const ext = filepath.slice(filepath.lastIndexOf("."));
  const Language = LANGUAGE_MAP[ext];

  if (!Language) {
    console.log(`❌ Unsupported file type: ${ext}`);
    return;
  }

  const code = fs.readFileSync(filepath, "utf8");
  const parser = new Parser();
  parser.setLanguage(Language);

  const tree = parser.parse(code);
  const astJson = nodeToJson(tree.rootNode, code);

  const outputFile = filepath + ".json";
  fs.writeFileSync(outputFile, JSON.stringify(astJson, null, 2));

  console.log(`✅ JSON created → ${outputFile}`);
}

// Files to convert
const files = [
  "sample.js",
  "sample.py",
  "sample.ts",
  "sample.go",
  "Sample.java"
];

files.forEach(parseFile);
