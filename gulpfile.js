var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var fileinclude = require('gulp-file-include');

gulp.task('css', function () {
  return gulp.src([
    'css/bootstrap.min.css',
    'css/owl.carousel.css',
    'css/animate.css',
    'css/font-awesome.min.css',
    'css/Dacu.css'
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist'));
});

gulp.task('jsDeps', function () {
  return gulp.src([
    'js/jquery.min.js',
    'js/jquery.superscrollorama.js',
    'js/bootstrap.min.js',
    'js/jquery.easing.min.js',
    'js/TM.min.js',
    'js/DSVGP.min.js',
    'js/owl.carousel.js',
  ]) 
    .pipe(concat('app.deps.min.js'))
    .pipe(gulp.dest('_dist'));
});

gulp.task('js', function () {
  return gulp.src([
    'js/Dacu.js',
  ]) 
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist'));
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/Dacu.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

var watchLogger = function (event) {
  gutil.log('[' + event.type + '] ' + event.path);
};

gulp.task('watch', ['build'], function () {
  var wCSS = gulp.watch(['css/*.css'], ['css']);
  wCSS.on('change', watchLogger);
  wCSS.on('add', watchLogger);
  wCSS.on('unlink', watchLogger);

  var wSASS = gulp.watch('./sass/**/*.scss', ['sass']);
  wSASS.on('change', watchLogger);
  wSASS.on('add', watchLogger);
  wSASS.on('unlink', watchLogger);
}); 

gulp.task('fileinclude', function () {
  gulp.src(['html/index.html'])
    .pipe(fileinclude())
    .pipe(gulp.dest('_dist'));
});

gulp.task('build', function (cb) {
  runSequence(['fileinclude'], ['sass'],['jsDeps'],['js'], ['css'], cb);
});


gulp.task('default', ['watch']);