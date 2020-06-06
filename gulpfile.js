const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const paths = {
  html : [ 'app/default.html' ],
  css : [ 'app/public/styles/**/*.scss' ],
  images : [ 'app/public/images/**/*.*' ],
  jsx : [ 'app/layouts/default.jsx' ],
  js : [ 'app/public/scripts/**/*.js' ],
  vendors: {
    base: [ 'node_modules/jquery/dist/jquery.min.js' ],
    scripts: [
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/bezier-easing/dist/bezier-easing.min.js',
      'node_modules/jquery.cookie/jquery.cookie.js',
    ],
    fonts: [
      'node_modules/slick-carousel/slick/fonts/**/*.*',
      'app/public/fonts/*.*'
    ],
    statics: [
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ]
  },
  libs: [ 'app/public/libs/**/*.js' ]
};

const dest = {
  dist: [ './dist/' ],
  css: [ './dist/css/' ],
  fonts: [ './dist/fonts/' ],
  images: [ './dist/images/' ],
  scripts: [ './dist/scripts/' ],
  libs: ['./dist/scripts/libs/'],
  statics: [ './dist/images/statics' ],
};

gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(concat('index.html'))
    .pipe(gulp.dest(dest.dist));
});

gulp.task('styles', function() {
  return gulp.src(paths.css)
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(gulp.dest(dest.css));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
  .pipe(gulp.dest(dest.images));
});

gulp.task('jQuery', function() {
  return gulp.src(paths.vendors.base)
    .pipe(gulp.dest(dest.scripts));
});

gulp.task('jsx', function() {
  return browserify(paths.jsx)
    .transform(babelify)
    .bundle()
    .on('error', (err)=>{
      console.log('JS Error', err);
    })
    .pipe(source('react.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest.scripts));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dest.scripts));
});

gulp.task('libs', function() {
  return gulp.src(paths.libs)
    .pipe(gulp.dest(dest.libs));
});

gulp.task('fontsVendor', function() {
  return gulp.src(paths.vendors.fonts)
    .pipe(gulp.dest(dest.fonts));
});

gulp.task('scriptsVendor', function() {
  return gulp.src(paths.vendors.scripts)
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest(dest.scripts));
});

gulp.task('staticsVendor', function() {
  return gulp.src(paths.vendors.statics)
    .pipe(gulp.dest(dest.statics));
});

const reload = function(done) {
  browserSync.reload();
  done();
};

const server = function() {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: [ `${dest.dist}` ],
      index: 'index.html'
    },
  });

  // Detect change -> rebuild TS
  gulp.watch(paths.html, gulp.series('html', reload));
  gulp.watch(paths.css,  gulp.series('styles', reload));
  gulp.watch(paths.images,  gulp.series('images', reload));
  gulp.watch(paths.vendors.base,  gulp.series('jQuery', reload));
  gulp.watch(paths.js,  gulp.series('scripts', reload));
  gulp.watch(paths.jsx,  gulp.series('jsx', reload));
  gulp.watch(paths.libs,  gulp.series('libs', reload));
  gulp.watch(paths.vendors.fonts,  gulp.series('fontsVendor', reload));
  gulp.watch(paths.vendors.statics,  gulp.series('staticsVendor', reload));
  gulp.watch(paths.vendors.scripts,  gulp.series('scriptsVendor', reload));
};

const clean = function() {
  return del(`${dest.dist}`);
};

gulp.task('build', gulp.series(clean, gulp.parallel('html', 'styles', 'images', 'jsx', 'jQuery', 'scripts', 'libs', 'fontsVendor', 'staticsVendor', 'scriptsVendor')));

gulp.task('dev', gulp.series('build', server));
