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
var clean = require('gulp-clean');
var strip_comments = require('gulp-strip-json-comments');

var listJsDependencias = [
  'src/js/dependencias/jquery.js',
  'src/js/dependencias/dsvgp.min.js',
  'src/js/dependencias/TweenMax.js',
  'src/js/dependencias/ScrambleTextPlugin.js',
  'src/js/dependencias/bootstrap/transition.js',
  'src/js/dependencias/bootstrap/collapse.js',
  'src/js/dependencias/jquery.easing.min.js',
  'src/js/dependencias/jquery.magnific-popup.js',
  'src/js/dependencias/jquery.superscrollorama.js',
  'src/js/dependencias/jquery.validate.min.js',
  'src/js/dependencias/owl.carousel.js'
];
var listJs = [
  'src/js/home.js',
  'src/js/Servicios.Animation.js',
  'src/js/servicios.js',
  'src/js/contacto.js',
  'src/js/miselaneas.js',
  'src/js/dacu.js'
];

gulp.task('cleanDistAndDebug', () => {
  return gulp
    .src(['_dist', '_debug'])
    .pipe(clean());
});

gulp.task('copyStaticFolder', () => {
  return gulp
    .src(['src/static/.*', 'src/static/**'])
    .pipe(gulp.dest('_debug'))
    .pipe(gulp.dest('_dist'));
});

gulp.task('jsDependencias', () => {
  return gulp
    .src(listJsDependencias)
    .pipe(concat('app.dependencias.js'))
    .pipe(minify({exclude: ['tasks']}))
    .pipe(gulp.dest('_dist/js'));
});
gulp.task('jsPreloadAnimation', () => {
  return gulp
    .src('src/js/preloadAnimation.js')
    .pipe(concat('preloadAnimation.js'))
    .pipe(minify({exclude: ['tasks']}))
    .pipe(gulp.dest('_dist/js'));
});

gulp.task('js', () => {
  return gulp
    .src(listJs)
    .pipe(gulp.dest('_debug/js'))
    .pipe(concat('app.js'))
    .pipe(minify({exclude: ['tasks']}))
    .pipe(gulp.dest('_dist/js'));
});

gulp.task('sass', () => {
  return gulp
    .src('src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('app.min.css'))
    .pipe(strip_comments())
    .pipe(autoprefixer())
    .pipe(gulp.dest('_dist/css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_debug/css'))
});

gulp.task('fileinclude', () => {
  gulp
    .src('src/views/index.php')
    .pipe(fileinclude({
      context: {
        folder: '../',
        listJsDependencias: listJsDependencias,
        jsPreloadAnimation: 'src/js/preloadAnimation.js',
        listJs: listJs
      }
    }))
    .pipe(gulp.dest('_debug'));

  gulp
    .src('src/views/index.php')
    .pipe(fileinclude({
      context: {
        folder: '',
        listJsDependencias: ['js/app.dependencias-min.js'],
        jsPreloadAnimation: 'js/preloadAnimation.js',
        listJs: ['js/app-min.js']
      }
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_dist'))
});

var watchLogger = (event) => {
  gutil.log('[' + event.type + '] ' + event.path);
};

gulp.task('watch', ['release'], () => {

  var wSASS = gulp.watch('src/sass/**/*.scss', ['sass']);
  wSASS.on('change add unlink', watchLogger);

  var hHtml = gulp.watch([
    'src/views/**', 'src/svg.embedded/**', 'src/php/**'
  ], ['fileinclude']);
  hHtml.on('change add unlink', watchLogger);

  var hHtml = gulp.watch([
    'src/static/.*', 'src/static/**'
  ], ['copyStaticFolder']);
  hHtml.on('change add unlink', watchLogger);
});

gulp.task('release', (cb) => {
  runSequence('cleanDistAndDebug', 'copyStaticFolder', 'fileinclude', 'sass', 'jsDependencias', 'jsPreloadAnimation', 'js', cb);
});

gulp.task('default', ['watch']);