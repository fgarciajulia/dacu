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

gulp.task('jsdependencias', () => {
  return gulp.src([
      'js/dependencias/jquery.js',

      //'js/dependencias/bootstrap/affix.js',
      //'js/dependencias/bootstrap/alert.js',
      //'js/dependencias/bootstrap/button.js',
      //'js/dependencias/bootstrap/carousel.js',
      //'js/dependencias/bootstrap/collapse.js',
      'js/dependencias/bootstrap/dropdown.js',
      //'js/dependencias/bootstrap/modal.js',
      //'js/dependencias/bootstrap/scrollspy.js',
      //'js/dependencias/bootstrap/tab.js',
      //'js/dependencias/bootstrap/transition.js',
      //'js/dependencias/bootstrap/tooltip.js',
      //'js/dependencias/bootstrap/popover.js',

      'js/dependencias/dsvgp.min.js',
      'js/dependencias/jquery.easing.min.js',
      'js/dependencias/jquery.magnific-popup.js',
      'js/dependencias/jquery.superscrollorama.js',
      'js/dependencias/jquery.validate.min.js',
      'js/dependencias/owl.carousel.js',
      'js/dependencias/tm.min.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.dependencias.js'))
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

gulp.task('js', () => {
  return gulp.src([
      'js/preloadAnimation.js',
      'js/home.js',
      'js/Servicios.Animation.js',
      'js/servicios.js',
      'js/contacto.js',
      'js/miselaneas.js',
      'js/dacu.js',
    ])
    //.pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      exclude: ['tasks'],
    }))
    //.pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist'));
});

gulp.task('sass', () => {
  return gulp.src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(autoprefixer()) // desHabilitar para desarrollo
    .pipe(concat('app.min.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist'));
});

gulp.task('fileinclude', () => {
  gulp.src(['html/index.php'])
    .pipe(fileinclude())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('_dist'));
});

var watchLogger = (event) => {
  gutil.log('[' + event.type + '] ' + event.path);
};

gulp.task('watch', ['build'], () => {

  var wSASS = gulp.watch('sass/**/*.scss', ['sass']);
  wSASS.on('change add unlink', watchLogger);

  var wJS = gulp.watch('js/*.js', ['js']);
  wJS.on('change add unlink', watchLogger);

  var hJS = gulp.watch(['html/**', 'svg.embedded/**', 'php/**'], ['fileinclude']);
  hJS.on('change add unlink', watchLogger);

  var wJS_dependencias = gulp.watch(['js/dependencias/*.js'], ['jsdependencias']);
  wJS_dependencias.on('change add unlink', watchLogger);
});


gulp.task('build', (cb) => {
  runSequence(['fileinclude'], ['sass'], ['jsdependencias'], ['js'], cb);
});


gulp.task('default', ['watch']);