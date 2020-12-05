var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
 
var paths = {
  styles: {
    src: 'css/**/*.css',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'js/**/*.js',
    dest: 'assets/scripts/'
  }
};
 
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}
 
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
} 
 
var build = gulp.parallel(styles, scripts);

exports.build = build;


