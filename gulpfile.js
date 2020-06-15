const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compilar SASS a CSS

function stylesheet(){
    //Ruta de los archivos SCSS
    return gulp.src('./assets/scss/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./assets/css'))
               .pipe(browserSync.stream());
}

//

function watch(){
    browserSync.init({
        server: {
            baseDir : './'
        }
    });
    gulp.watch('./assets/scss/**/*.scss', stylesheet);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

exports.stylesheet = stylesheet;
exports.watch = watch;