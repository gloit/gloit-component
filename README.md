## Gloit

Gloit是基于Ember开发的基础控件库。支持的浏览器：Google Chrome、Firefox、Safari、IE8+。Gloit是从[ember-menglifang](https://github.com/emberjs-cn/ember-menglifang)中抽取的widgets部分的延续。

### 使用说明

在页面`head`中添加`css`文件：

```html
<head>
  <!-- ... -->
  <link rel="stylesheet" href="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/css/bootstrap.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/font-awesome/4.0.3/css/font-awesome.css" />
  <link rel="stylesheet" href="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/select2/3.4.6/select2.css" />
  <link rel="stylesheet" href="http://cdn.staticfile.org/select2/3.4.6/select2-bootstrap.css" />
  <link rel="stylesheet" href="http://gloit.github.com/dist/gloit.css" />
  <!-- ... -->
</head>
```

在`body`末尾添加`js`文件：

```html
  <!-- ... -->
    <script type="text/javascript" src="http://cdn.staticfile.org/jquery/1.11.0/jquery.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/jquery-browser/0.0.6/jquery.browser.js"></script> 
    <script type="text/javascript" src="https://raw.githubusercontent.com/jamesarosen/CLDR.js/master/plurals.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/handlebars.js/1.3.0/handlebars.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/ember.js/1.4.0/ember.js"></script> 
    <script type="text/javascript" src="https://raw.githubusercontent.com/jamesarosen/ember-i18n/master/lib/i18n.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/twitter-bootstrap/3.1.1/js/bootstrap.js"></script> 
    <script type="text/javascript" src="http://emberjs.com/list-view/javascripts/libs/list-view.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-core.min.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-button.min.js"></script> 
    <script type="text/javascript" src="http://ember-addons.github.io/bootstrap-for-ember/dist/js/bs-modal.min.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/select2/3.4.6/select2.js"></script> 
    <script type="text/javascript" src="http://cdn.staticfile.org/select2/3.4.6/select2_locale_zh-CN.js"></script> 
    <script type="text/javascript" src="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js"></script> 
    <script type="text/javascript" src="http://www.malot.fr/bootstrap-datetimepicker/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script> 
    <script type="text/javascript" src="http://gloit.github.com/dist/globals/gloit.js"></script> 
  </body>
</html>
```

### 开发指南

#### 搭建开发环境

1. 安装构建工具

  构建gloit依赖node.js、broccoli和bower，因此需要预先安装这些个工具：

  *注意：* node.js的安装请参照各平台对应的安装说明文件，在此不对安装过程进行详细介绍。

  ```bash
  npm install -g broccoli-cli
  npm install -g bower
  ```

2. 签出项目

  ```bash
  git checkout https://github.com/gloit/gloit.git
  ```

3. 安装依赖

  ```bash
  npm install
  ```

4. 发布

  gloit构建发布过程只需执行`rm -fr ./dist && broccoli build ./dist`即可完成。命令正确执行后，可以在`dist`目录中找到编译后的代码。


5. 测试

  安装testem：`npm install -g testem`

  启动服务：`broccoli serve`

  运行测试：`testem`

### 声明

本项目目前仍处于“社会主义初级阶段”，如果您非常感兴趣，可以尝试在小型的项目中使用。另外，因“初级阶段”需要大量的人力物力来进行支撑，所以热烈欢迎志同道合的同志们可以加入本项目，为实现我们心中的“共产国际”出一份力！本人在此万分感谢！

期待您的加入！
