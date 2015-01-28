var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    react = require('gulp-react'),
    plumber = require('gulp-plumber'),
    through =require('through2');


// Plumber handler which beeps on error
var errorHandler = function(error) {
    console.log(error.toString());
    process.stderr.write('\x07');
}

// Beeps on error
var JsLintBeepReporter = function() {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {

            // return empty file
            cb(null, file);
        }
        if (!file.jshint.success) {
            process.stderr.write('\x07');
        }
        cb(null, file);
    });
};

// 'jsx' transforms all the JSX into JS
gulp.task('jsx', function() {
    return gulp.src('./src/**/*.jsx')
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        .pipe(react())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(JsLintBeepReporter())
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
    return gulp.src('./src/**/*.js')
        .pipe(plumber({
            errorHandler: errorHandler
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(JsLintBeepReporter())
        .pipe(gulp.dest('dist/'));
});

// 'watch' reruns 'jsx' when files are modified
gulp.task('watch', function() {
    gulp.watch('./src/jsx/*.jsx', ['jsx']);
    gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'jsx', 'js']);

gulp.task('build', ['jsx', 'js']);
