var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var input = 'assets/sass/**/*.scss';
var output = 'assets/css';
var buildcss = 'assets/build/css';
var buildjs = 'assets/build/js';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task('minicss', function () {
    return gulp.src('assets/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(buildcss));
});

gulp.task('compressjs', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(buildjs));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "www.kunstmaan.dev"
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("assets/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);