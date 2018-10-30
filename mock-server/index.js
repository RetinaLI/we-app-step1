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

router.post('/security/login!loginNoCaptcha.do', (req, res) => {
  res.status(200).send(ControllerMap.profile.login(req.body));
});

router.get('/manage/user!getSelf.do', (req, res) => {
  res.status(200).send(ControllerMap.profile.getCurrentUser());
});

router.get('/manage/user!listGroupUsers.do', (req, res) => {
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
// 车辆详情-实时
router.get('/business/can_bus!listAnalysisCodes.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getRealTimeInfo());
});
router.get('/business/can_bus!listByCarId.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getWarnInfo());
});
router.get('/business/device!findByDid.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getCarDetailInfo());
});
// 车辆详情-画像
router.get('/business/device_stats!listByCarId.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitScore());
});
router.get('/sas/capacity_daily!provinceTopAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitProvinceOrder());
});
router.get('/sas/capacity_daily!cityTopAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitCityOrder());
});
router.get('/sas/car_tags!listByCar.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getCitiesProportion());
});
router.get('/sas/car_analysis!stopPointAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitStopPoints());
});
router.get('/sas/car_analysis!runPeriodAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitDayNight());
});
router.get('/sas/capacity_daily!weatherAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitWeather());
});
router.get('/sas/capacity_daily!humidityAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitHumidity());
});
router.get('/sas/capacity_daily!temperatureAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitTemperature());
});
router.get('/sas/car_analysis!elevationAnalysis.do', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitAltitude());
});

router.get('/car/locationInfo', (req, res) => {
  res.status(200).send(ControllerMap.car.getPortraitAltitude());
});

// 车辆列表
router.post('/business/device!listBySQL.do', (req, res) => {
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
router.get('/common/car_type!combo.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.car.getTypes());
  }, 3000);
});

// 搜索列表
router.post('/search', (req, res) => {
  // setTimeout(() => {
  res.status(200).send(ControllerMap.car.getSearchList());
  // }, 3000);
});

// 行程
router.get('/sas/car_analysis!findRunInfo.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripIndex());
});
router.get('/business/car_info!get.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripIndexCreated());
});
router.get('/sas/car_analysis!listRunRecord.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripIndex());
});
router.get('/trip/getTripMonth', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripMonth());
});
router.get('/business/location_summary!findByMonth.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripMonthList());
});
router.get('/business/location_summary!findRunDetailByDaily.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripDayTime());
});

router.get('/business/location!listByDid.do', (req, res) => {
  res.status(200).send(ControllerMap.trip.getTripDayMap());
});
router.get('/profile/home/homeInfo', (req, res) => {
  res.status(200).send(ControllerMap.profile.getHomeInfo());
});

// 我的个人信息页面
router.post('/manage/user!save.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.updateUserName());
  }, 4000);
});
router.post('/profile/suggest/submit', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.submitSuggest());
  }, 4000);
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
// 首页
router.post('/business/server_summary!onlineInfo.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarSituation());
  }, 4000);
});
router.post('/sas/market/device_monthly!findCountByProvince.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getProvinceCarInfo());
  }, 3000);
});

router.get('/business/component!installByCarBrandDate.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarConfigurationInfo());
  }, 4000);
});

router.post('/sas/car_operation!listGroupByCarType.do', (req, res) => {
  setTimeout(() => {
    res.status(200).send(ControllerMap.profile.getCarModelsInfo());
  }, 4000);
});

// router.post('/file!uploadFiles.do', (req, res) => {
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
  //   setTimeout(() => {
  //     res.status(200).send(ControllerMap.profile.uploadFile());
  //   }, 4000);
  // });
// });

app.use(router);
app.listen(9012, () => {
  console.info(`mock server start success! please visit: http://localhost:${9012}/***`);
});
module.exports = app;
