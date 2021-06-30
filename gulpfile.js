const { src, dest, parallel, series, watch } = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat');
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

function scripts() {
    return src('./src/js/script.js')
    
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./src/js'))
    .pipe(browserSync.stream());
}

function scriptsLibs() {
    return src('./src/libs/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./src/js'))
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
    watch('./src/js/script.js', scripts)
    watch('./src/libs/*.js', scriptsLibs)
}
 
exports.styles = styles;
exports.browsersync = browsersync;


exports.default = parallel(styles, scriptsLibs, scripts, browsersync, startwatch)

