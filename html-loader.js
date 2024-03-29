const fs = require('fs');
const path = require('path');

function processTemplates(content, resourcePath) {
  const regex = /<template src="(.+?)"><\/template>/g;
  let match;
  let newContent = content;

  while ((match = regex.exec(content)) !== null) {
    const filePath = path.resolve(path.dirname(resourcePath), match[1]);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    newContent = newContent.replace(match[0], processTemplates(fileContent, filePath));
  }

  return newContent;
}

module.exports = function(content) {
  const processedContent = processTemplates(content, this.resourcePath);
  return `module.exports = ${JSON.stringify(processedContent)}`;
};