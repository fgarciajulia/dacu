var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var fileinclude = require('gulp-file-include');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');


gulp.task('jsDeps', function () {
  return gulp.src([
    'js/jquery.min.js',
    'js/jquery.superscrollorama.js',
    'js/bootstrap.min.js',
    'js/jquery.easing.min.js',
    'js/TM.min.js',
    'js/DSVGP.min.js',
    'js/owl.carousel.js',
    'js/jquery.magnific-popup.js',
    'js/jquery.validate.min.js',
    'js/jquery-ui.min.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('app.deps.js'))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    },
    exclude: ['tasks'],
  }))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest('_dist'));
});

gulp.task('js', function () {
  return gulp.src([
    'js/Servicios.Animation.js',
    'js/Dacu.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    },
    exclude: ['tasks'],
  }))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest('_dist'));
});

gulp.task('sass', function () {
  return gulp.src('sass/Dacu.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(autoprefixer()) // desHabilitar para desarrollo
    .pipe(concat('app.min.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist'));

});



var watchLogger = function (event) {
  gutil.log('[' + event.type + '] ' + event.path);
};
gulp.task('fileinclude', function () {
  gulp.src(['html/index.php'])
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('_dist'));
});

gulp.task('watch', ['build'], function () {

  var wSASS = gulp.watch('sass/**/*.scss', ['sass']);
  wSASS.on('change', watchLogger);
  wSASS.on('add', watchLogger);
  wSASS.on('unlink', watchLogger);

  var wJS = gulp.watch(['js/Dacu.js', 'js/Servicios.Animation.js'], ['js']);
  wJS.on('change', watchLogger);
  wJS.on('add', watchLogger);
  wJS.on('unlink', watchLogger);

  var hJS = gulp.watch(['html/**', 'svg.embedded/**', 'php/**'], ['fileinclude']);
  hJS.on('change', watchLogger);
  hJS.on('add', watchLogger);
  hJS.on('unlink', watchLogger);

});


gulp.task('build', function (cb) {
  runSequence(['fileinclude'], ['sass'], ['jsDeps'], ['js'], cb);
});


gulp.task('default', ['watch']);