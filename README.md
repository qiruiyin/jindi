# 网站快速开发模板

## 开发环境
以nodejs为基础，gulp搭建前端自动化模块，并采用bower进行包模块管理

* 'npm install -g gulp'
* 'npm install -g bower'

### gulpfile 主要模块

* gulp start 启动项目
	* browser-sync 启动服务器
	* watch 监听修改
	* sass scss翻译
	* html 静态模板渲染
* gulp test js和css检查
	* jshint js校验
	* css-lint css校验
* gulp 生成压缩包
	* image 图片压缩
	* dist js和css压缩及生成压缩包

##项目运行

* 'npm install'
* 'gulp start'

## SCSS 文件说明

* 参考https://github.com/marvin1023/sandal.git 和 https://github.com/jimyuan/tmpl.git

## 雪碧图生成说明

  1、请修改gulp-css-spriter/lib/map-over......文件的第48行开始替换为
  
	// background-image always has a url 且判断url是否有?__spriter后缀
	if(transformedDeclaration.property === 'background-image' && /\?__spriter/i.test(transformedDeclaration.value)) {
	    transformedDeclaration.value = transformedDeclaration.value.replace('?__spriter','');
	    return cb(transformedDeclaration, declarationIndex, declarations);
	  }
	  // Background is a shorthand property so make sure `url()` is in there 且判断url是否有?__spriter后缀
	  else if(transformedDeclaration.property === 'background' && /\?__spriter/i.test(transformedDeclaration.value)) {
	    transformedDeclaration.value = transformedDeclaration.value.replace('?__spriter','');
	    var hasImageValue = spriterUtil.backgroundURLRegex.test(transformedDeclaration.value);
	    if(hasImageValue) {
	        return cb(transformedDeclaration, declarationIndex, declarations);
	    }
	  }
