var gulp = require('gulp');
var browserSync = require('browser-sync');
var vulcanize = require('gulp-vulcanize');

// watch files for changes and reload
gulp.task('serve', function(){
   browserSync({
      server: {
          baseDir: 'www'
      } 
   });
   gulp.watch(['*.html', '**/*.html', 'js/*.js', 'css/*.css'], {cwd: 'www'}, browserSync.reload);
});

// concatenate custom elements 
gulp.task('dist', function(){
  return gulp.src('www/index.html')
  .pipe(vulcanize({
      stripComments: true,
      inlineCss: true
  }))
  .pipe(gulp.dest('dist'))
});

gulp.task('default', ['serve', 'vulcanize']);