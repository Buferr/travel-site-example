var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
postcssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([postcssimport, mixins, postcssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(e){
        console.log(e.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});