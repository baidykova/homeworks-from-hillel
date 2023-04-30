const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('styles', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function() {
  return gulp.src('./js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('build', gulp.series('styles', 'scripts'));

