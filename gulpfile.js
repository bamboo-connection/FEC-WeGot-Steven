const gulp = require('gulp');
const del = require('del');

gulp.task('copy', function() {
  const folders = ['src/**/*.html', 'src/**/*.png'];
  // folders.map(function(folder) {
  //  return gulp.src(folder)
  //             .pipe(gulp.dest('./dist/'));
  gulp.src(folders[0])
      .pipe(gulp.dest('./public/'));

  gulp.src(folders[1])
      .pipe(gulp.dest('./public/'));
});

gulp.task('clean', function() {
  return del.sync([
    './public/**',
  ]);
});

gulp.task('build', ['clean', 'copy']);