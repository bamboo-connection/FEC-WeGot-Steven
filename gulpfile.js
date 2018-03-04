const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function() {
  const folders = ['src/**/*.html', 'src/**/*.png', 'src/js/*.js', 'src/css/*.css', 'src/fonts/*'];
  // folders.map(function(folder) {
  //  return gulp.src(folder)
  //             .pipe(gulp.dest('./dist/'));
  gulp.src(folders[0])
      .pipe(gulp.dest('./public/'));

  gulp.src(folders[1])
      .pipe(gulp.dest('./public/'));

  gulp.src(folders[2])
      .pipe(gulp.dest('./public/js/'));

  gulp.src(folders[3])
      .pipe(gulp.dest('./public/css/'));

  gulp.src(folders[4])
      .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('clean', function() {
  return del.sync([
    './public/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);