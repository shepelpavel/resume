'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    prefixer = require('gulp-autoprefixer'),
    sass = require("gulp-sass")(require("node-sass")),
    cssnano = require('gulp-cssnano'),
    minify = require('gulp-babel-minify'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),
    svgsprite = require('gulp-svg-sprite'),
    concat = require('gulp-concat');


var path = {
    src: {
        js: './_source/js/**/*.js',
        components: './_source/components/**/*.js',
        style: './_source/css/**/*\.scss',
        css: './_source/css/**/*\.css',
        img: './_source/img/**/*.*',
        svg: './_source/svg/**/*\.svg',
        font: './_source/fonts/**/*\.*',
        module: './_source/module/**/*.*',
    },
    build: {
        js: './assets/js/',
        components: './assets/components/',
        style: './assets/css/',
        css: './assets/css/',
        img: './assets/img/',
        svg: './assets/svg/',
        font: './assets/fonts/',
        module: './assets/module/',
    }
};

gulp.task('js:build', gulp.series(function () {
    return gulp.src(path.src.js)
        .pipe(minify().on('error', gutil.log))
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest(path.build.js));
}));

gulp.task('components:build', gulp.series(function () {
    return gulp.src(path.src.components)
        .pipe(minify().on('error', gutil.log))
        .pipe(concat('components.min.js'))
        .pipe(gulp.dest(path.build.components));
}));

gulp.task('style:build', gulp.series(function () {
    return gulp.src(path.src.style)
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(prefixer({
            cascade: false
        }).on('error', gutil.log))
        .pipe(gulp.dest(path.build.style));
}));

gulp.task('css:build', gulp.series(function () {
    return gulp.src(path.src.css)
        .pipe(prefixer({
            cascade: false
        }).on('error', gutil.log))
        .pipe(cssnano().on('error', gutil.log))
        .pipe(gulp.dest(path.build.css));
}));


gulp.task('img:build', gulp.series(function () {
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));
}));

gulp.task('svg:build', gulp.series(function () {
    return gulp.src(path.src.svg)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgsprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest(path.build.svg));
}));

gulp.task('font:build', gulp.series(function () {
    return gulp.src(path.src.font)
        .pipe(gulp.dest(path.build.font))
}));

gulp.task('module:build', gulp.series(function () {
    return gulp.src(path.src.module)
        .pipe(gulp.dest(path.build.module))
}));

gulp.task('build', gulp.series([
    'js:build',
    'components:build',
    'style:build',
    'css:build',
    'img:build',
    'svg:build',
    'font:build',
    'module:build'
]));

gulp.task('watch', gulp.series(function () {
    gulp.watch(path.src.js, gulp.series('js:build'));
    gulp.watch(path.src.components, gulp.series('components:build'));
    gulp.watch(path.src.style, gulp.series('style:build'));
    gulp.watch(path.src.css, gulp.series('css:build'));
    gulp.watch(path.src.img, gulp.series('img:build'));
    gulp.watch(path.src.svg, gulp.series('svg:build'));
    gulp.watch(path.src.font, gulp.series('font:build'));
    gulp.watch(path.src.module, gulp.series('module:build'));
}));

gulp.task('default', gulp.series(['build', 'watch']));