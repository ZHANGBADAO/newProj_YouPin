var gulp=require("gulp");

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin"));
});

gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/js"));
});

gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/css"));
});

gulp.task("copy-php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/php"));
});

gulp.task("copy-php_root",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin"));
});

gulp.task("copy-img",function(){
	gulp.src("img/*.{png,jpg,gif}")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/img"));
});
gulp.task("copy-img-sound",function(){
	gulp.src("img/sound/*.{png,jpg,gif}")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/img/sound"));
});
gulp.task("copy-img-ironMan",function(){
	gulp.src("img/iron_man/*.{png,jpg,gif}")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/img/iron_man"));
});
gulp.task("copy-img-yanZhengMa",function(){
	gulp.src("img/yanZhengMa/*.{png,jpg,gif}")
	.pipe(gulp.dest("C:/phpStudy/WWW/zxt/newProj_YouPin/img/yanZhengMa"));
});

//同时执行上面的所有任务
gulp.task("build",
["copy-html","copy-js","copy-css","copy-php","copy-php_root","copy-img","copy-img-yanZhengMa","copy-img-sound","copy-img-ironMan","copy-php_root"],
function(){
	console.log("done");
});


//监听上面所有的单个任务
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("img/*.{png,jpg,gif}",["copy-img"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("*.php",["copy-php_root"]);
	gulp.watch("img/sound/*.{png,jpg,gif}",["copy-img-sound"]);
	gulp.watch("img/iron_man/*.{png,jpg,gif}",["copy-img-ironMan"]);
	gulp.watch("img/yanZhengMa/*.{png,jpg,gif}",["copy-img-yanZhengMa"]);
	
});
