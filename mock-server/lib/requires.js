let fs = require('fs');

module.exports = (_path, ...excludes) => {
  let files = fs.readdirSync(_path);
  if (files.length === 0) return [];
  let moduleMap = {};
  _path = _path.endsWith('/') ? _path : (_path + '/');
  files.forEach((_file) => {
    if (excludes.indexOf(_file) > -1) return;
    let fileName = _file.substr(0, _file.lastIndexOf('.'));
    try {
      moduleMap[fileName]= require(_path + _file);
    } catch (ex) {
      console.info('load ', _file, ' error:', ex);
    }
  });
  return moduleMap;
};
