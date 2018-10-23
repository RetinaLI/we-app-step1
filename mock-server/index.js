let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let requires = require('./lib/requires');
let ControllerMap = requires(path.resolve(__dirname, './controllers'));
// let multiparty = require('multiparty');
// let fs = require('fs');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

const URL_PREFIXERS = '';

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});

router.get(URL_PREFIXERS + '/test', (req, res) => {
  res.status(200).send('ok, come on!');
});

router.post('/passport/regist', (req, res) => {
  res.status(200).send({ code: 200 });
});

router.get('/profile/info', (req, res) => {
  res.status(200).send(ControllerMap.profile.getCurrentUser());
});

router.get('/profile/platform/list', (req, res) => {
  res.status(200).send(ControllerMap.profile.getPlatforms());
});

router.post('/profile/platform/add', (req, res) => {
  res.status(200).send(ControllerMap.profile.addPlatform());
});

router.post('/profile/platform/remove', (req, res) => {
  res.status(200).send(ControllerMap.profile.removePlatform(req.params.id));
});

router.get('/report/list', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.report.getList());
  }, 3000);

});

router.get('/car/realTimeInfo', (req, res) => {
  res.status(200).send(ControllerMap.car.getRealTimeInfo());
  /* setTimeout(() => {
    res.status(200).send(ControllerMap.car.getRealTimeInfo());
  }, 5000); */
});

router.get('/car/portraitInfo', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitInfo());
  /* setTimeout(() => {
    res.status(200).send(ControllerMap.car.getPortraitInfo());
  }, 5000); */
});

router.get('/car/locationInfo', (req, res) => {
  res.status(200).send(ControllerMap.car.getPositionByVin());
});

// 车辆列表
router.post('/cars/list', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.car.getList());
  }, 3000);
});

// 品牌列表
router.get('/common/car_brand!combo.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.car.getBrands());
  }, 3000);
});

// 型号列表
router.post('/common/car_type!combo.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.car.getTypes());
  }, 3000);
});

// 搜索列表
router.post('/search', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.car.getSearchList());
  }, 3000);
});

router.post('/profile/userInformation/update', (req, res) => {
  res.status(200).send(ControllerMap.profile.updateUserName());
});

router.post('/profile/suggest/submit', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.submitSuggest());
  }, 4000);
});
// 行程
router.get('/trip/getTripIndex', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripIndex());
});
router.get('/trip/getTripMonth', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripMonth());
});
router.get('/trip/getTripDay', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripDay());
});
router.get('/trip/getTripDayTime', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripDayTime());
});
router.get('/profile/home/homeInfo', (req, res) => {
  res.status(200).send(ControllerMap.profile.getHomeInfo());
});
router.get('/profile/suggest/getSubscribeConfig', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getSubscribeConfig());
  }, 4000);
});

router.post('/profile/suggest/editSubscribeConfig', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.editSubscribeConfig());
  }, 4000);
});

router.get('/profile/home/carSituation', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarSituation());
  }, 4000);
});

router.get('/profile/home/provinceCarInfo', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getProvinceCarInfo());
  }, 4000);
});

router.get('/profile/home/carConfigurationInfo', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarConfigurationInfo());
  }, 4000);
});

router.get('/profile/home/carModelsInfo', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarModelsInfo());
  }, 4000);
});

router.post('/profile/file!uploadFiles.do', (req, res) => {
  // var form = new multiparty.Form({ uploadDir: './public/img/' });
  //
  // // 上传完成后处理
  // form.parse(req, function (err, fields, files) {
  //   var filesTmp = JSON.stringify(files, null, 2);
  //
  //   if (err) {
  //     console.log('parse error: ' + err);
  //   } else {
  //     console.log('parse files: ' + filesTmp);
  //     var inputFile = files.inputFile[0];
  //     var uploadedPath = inputFile.path;
  //     var dstPath = './public/files/' + inputFile.originalFilename;
  //
  //     // 重命名为真实文件名
  //     fs.rename(uploadedPath, dstPath, function (err) {
  //       if (err) {
  //         console.log('rename error: ' + err);
  //       } else {
  //         console.log('rename ok');
  //       }
  //     });
  //   }
    setTimeout(() => {
      res.status(200).send(ControllerMap.profile.uploadFile());
    }, 4000);
  // });
});

app.use(router);
app.listen(9012, () => {
  console.info(`mock server start success! please visit: http://localhost:${9012}/***`);
});
module.exports = app;
