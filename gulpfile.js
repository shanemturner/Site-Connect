var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
<<<<<<< HEAD
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');

=======
autoprefixer = require('autoprefixer');
>>>>>>> a5cc59b968820be4b3081aa9a08ad55f77249e28

gulp.task('default', function() {
    console.log('Hooray, it worked');
});

gulp.task('html', function(){
    console.log('Hello world');
});

gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles.css')
<<<<<<< HEAD
        .pipe(postcss([cssvars, autoprefixer]))
=======
        .pipe(postcss([autoprefixer]))
>>>>>>> a5cc59b968820be4b3081aa9a08ad55f77249e28
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
    gulp.start('html');
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});