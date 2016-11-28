var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('jsDeps', function () {
  return gulp.src([
    'js/deps/jquery.min.js',
    'js/deps/bootstrap.min.js',
    'js/deps/dsvgp.min.js',
    'js/deps/jquery.easing.min.js',
    'js/deps/jquery.magnific-popup.js',
    'js/deps/jquery.superscrollorama.js',
    'js/deps/jquery.validate.min.js',
    'js/deps/owl.carousel.js',
    'js/deps/tm.min.js'
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
    'js/home.js',
    'js/Servicios.Animation.js',
    'js/servicios.js',
    'js/contacto.js',
    'js/miselaneas.js',
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
    .pipe(autoprefixer()) // desHabilitar para desarrollo
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

  var wJS = gulp.watch( 'js/*.js', ['js']);
  wJS.on('change', watchLogger);
  wJS.on('add', watchLogger);
  wJS.on('unlink', watchLogger);

  var hJS = gulp.watch(['html/**', 'svg.embedded/**', 'php/**'], ['fileinclude']);
  hJS.on('change', watchLogger);
  hJS.on('add', watchLogger);
  hJS.on('unlink', watchLogger);

  var wJS_deps = gulp.watch(['js/deps/*.js'], ['jsDeps']);
  wJS_deps.on('change', watchLogger);
  wJS_deps.on('add', watchLogger);
  wJS_deps.on('unlink', watchLogger);
});


gulp.task('build', function (cb) {
  runSequence(['fileinclude'], ['sass'], ['jsDeps'], ['js'], cb);
});


gulp.task('default', ['watch']);