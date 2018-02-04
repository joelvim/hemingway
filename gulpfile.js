var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean");

var callSass = function(prod) {
  if (prod) {
    return sass({outputStyle: "compressed"});
  } else {
    return sass();
  }
};

const produceCss = function(prod) {
  return function() {
    gulp
      .src("sass/style.sass")
      .pipe(callSass(prod))
      .pipe(autoprefixer())
      .pipe(gulp.dest("static/css/"));
  };
};

gulp.task("default", produceCss(true));

gulp.task("watch", function() {
  gulp.watch("sass/style.sass", produceCss(false));
});

gulp.task("clean", function() {
  gulp.src("static/css").pipe(clean());
});
