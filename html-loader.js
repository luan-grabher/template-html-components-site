const fs = require('fs');
const path = require('path');

module.exports = function(content) {
  const regex = /<template src="(.+?)"><\/template>/g;
  let match;
  let newContent = content;

  while ((match = regex.exec(content)) !== null) {
    const filePath = path.resolve(path.dirname(this.resourcePath), match[1]);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    newContent = newContent.replace(match[0], fileContent);
  }

  return `module.exports = ${JSON.stringify(newContent)}`;
};