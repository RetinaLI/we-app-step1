# 车联网平台微信小程序
>WeUI + WePY

## 开始步骤

### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
npm install wepy-cli -g
```

### 3. 安装开发依赖
```bash
npm install
```

### 4. 编译源代码
```bash
wepy build --watch
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行报错。**

## 注意事项

### 1. 缩紧为两个空格。切记 切记
### 2. 请求后台禁止直接使用`wepy.request`或`ajaxProvider.request`，必须封装进一个service才可使用
### 3. 不要滥用`$apply()`
### 4. 变量、属性名尽量不使用`$`开头，避免与`wepy`的内置内容冲突