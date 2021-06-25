const { src, dest, parallel, series, watch } = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
    sass.compiler = require('node-sass');

function styles() {
	return src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest('./src/css'))
    .pipe(browserSync.stream());
}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function startwatch(){
    watch('./src/scss/**/*.scss', styles)
    watch('*.html').on('change', browserSync.reload)
}
 
exports.styles = styles;
exports.browsersync = browsersync;

exports.default = parallel(styles, browsersync, startwatch)
