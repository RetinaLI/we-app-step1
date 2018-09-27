let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let requires = require('./lib/requires');
let ControllerMap = requires(path.resolve('./controllers'));
let multiparty = require('multiparty');
let fs = require('fs');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

const URL_PREFIXERS = '';

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});

router.get(URL_PREFIXERS + '/test', (req, res) => {
  res.status(200).send('ok, come on!');
});

router.get('/profile/info', (req, res) => {
  res.status(200).send(ControllerMap.profile.getCurrentUser());
});

// router.post(URL_PREFIXERS + '/file!uploadFiles.do', (req, res) => {
//   var form = new multiparty.Form({ uploadDir: './public/img/' });

//   // 上传完成后处理
//   form.parse(req, function (err, fields, files) {
//     var filesTmp = JSON.stringify(files, null, 2);

//     if (err) {
//       console.log('parse error: ' + err);
//     } else {
//       console.log('parse files: ' + filesTmp);
//       var inputFile = files.inputFile[0];
//       var uploadedPath = inputFile.path;
//       var dstPath = './public/files/' + inputFile.originalFilename;

//       // 重命名为真实文件名
//       fs.rename(uploadedPath, dstPath, function (err) {
//         if (err) {
//           console.log('rename error: ' + err);
//         } else {
//           console.log('rename ok');
//         }
//       });
//     }

//     res.status(200).send(ControllerMap.info.postImg());
//   });
// });

app.use(router);
app.listen(9012, () => {
  console.info(
    `mock server start success! please visit: http://localhost:${9012}/***`);
});
module.exports = app;
