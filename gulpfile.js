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
      'src/js/dependencias/jquery.js',
      'src/js/dependencias/bootstrap/dropdown.js',
      'src/js/dependencias/dsvgp.min.js',
      'src/js/dependencias/jquery.easing.min.js',
      'src/js/dependencias/jquery.magnific-popup.js',
      'src/js/dependencias/jquery.superscrollorama.js',
      'src/js/dependencias/jquery.validate.min.js',
      'src/js/dependencias/owl.carousel.js',
      'src/js/dependencias/tm.min.js'
    ])
    .pipe(gulp.dest('_debug/js'))
    .pipe(concat('app.dependencias.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      exclude: ['tasks'],
    }))
    .pipe(gulp.dest('_dist/js'));
});

gulp.task('js', () => {
  return gulp.src([
      'src/js/preloadAnimation.js',
      'src/js/home.js',
      'src/js/Servicios.Animation.js',
      'src/js/servicios.js',
      'src/js/contacto.js',
      'src/js/miselaneas.js',
      'src/js/dacu.js',
    ])
    .pipe(gulp.dest('_debug/js'))
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      exclude: ['tasks'],
    }))
    .pipe(gulp.dest('_dist/js'));
});

gulp.task('sass', () => {
  return gulp.src('src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(autoprefixer()) // desHabilitar para desarrollo
    .pipe(concat('app.min.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_debug/css'))
    .pipe(gulp.dest('_dist/css'));
});

gulp.task('fileincludeDebug', () => {
  gulp.src(['src/html/index.php'])
    .pipe(fileinclude({
      context: {
        debug: 'true'
      }
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('_debug'));
});

gulp.task('fileinclude', () => {
  gulp.src(['src/html/index.php'])
    .pipe(fileinclude({
      context: {
        debug: 'false'
      }
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('_dist'))
});

var watchLogger = (event) => {
  gutil.log('[' + event.type + '] ' + event.path);
};

gulp.task('watch', ['release'], () => {

  var wSASS = gulp.watch('src/sass/**/*.scss', ['sass']);
  wSASS.on('change add unlink', watchLogger);

  var wJS = gulp.watch('src/js/*.js', ['js']);
  wJS.on('change add unlink', watchLogger);

  var hJS = gulp.watch(['src/html/**', 'src/svg.embedded/**', 'src/php/**'], ['fileinclude']);
  hJS.on('change add unlink', watchLogger);

  var hJS = gulp.watch(['src/html/**', 'src/svg.embedded/**', 'src/php/**'], ['fileincludeDebug']);
  hJS.on('change add unlink', watchLogger);

  var wJS_dependencias = gulp.watch(['src/js/dependencias/*.js'], ['jsdependencias']);
  wJS_dependencias.on('change add unlink', watchLogger);
});


gulp.task('release', (cb) => {
  runSequence(['fileinclude'],['fileincludeDebug'], ['sass'], ['jsdependencias'], ['js'], cb);
});


gulp.task('default', ['watch']);