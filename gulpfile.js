
const { src, dest, watch }    = require('gulp');
const sass             = require('gulp-sass')(require('sass'));
const concat           = require('gulp-concat');
// const autoprefixer     = require('gulp-autoprefixer');


function styles() {
    return src('app/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        // .pipe(autoprefixer({
        //         overrideBrowserlist: ['last 10 versions'],
        //         grid: true
        //     }))
        .pipe(dest('app/css'))
}


function watching() {
    watch(['app/scss/**/*.scss'], styles)
}


exports.styles = styles;
exports.watching = watching;