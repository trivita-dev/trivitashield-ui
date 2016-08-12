var gulp            = require('gulp');
var notify          = require('gulp-notify');
var source          = require('vinyl-source-stream');
var browserify      = require('browserify');
var babelify        = require('babelify');
var ngAnnotate      = require('browserify-ngannotate');
var browserSync     = require('browser-sync').create();
var rename          = require('gulp-rename');
var templateCache   = require('gulp-angular-templatecache');
var uglify          = require('gulp-uglify');
var merge           = require('merge-stream');

// Where our app core files are located
var jsAppFiles = "src/app/**/*.js";
var viewFiles = "src/app/**/*.html";

// TODO: Break-out asset types to facilitate the minifying/uglifying of CSS and JS files
var assetFiles = "src/assets/**/**.**";


var interceptErrors = function(error) {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
};

// Browserify is used for handling Dependency Injection which is
// not naturally supported in Browsers
gulp.task('browserify', ['views'], function() {
    return browserify('./src/app/app.js')

    // Babelify is an ES6 to ES5 Transpiler and is used so that we can
    // Write our codebase in ES6 to future-proof our application
    .transform(babelify, { presets: ["es2015"] })

    // ngAnnotate Ensures that even though we are using Browerify for DI, we are
    // still able to also use Angular's native DI handlers as well... evidenced
    // through the 'ngInject' immediately after the many Controller Constructors
    .transform(ngAnnotate)
        .bundle()
        .on('error', interceptErrors)

    //Pass desired output filename to vinyl-source-stream
    .pipe(source('main.js'))

    // Start piping stream to tasks!
    .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
    return gulp.src("src/index.html")
        .on('error', interceptErrors)
        .pipe(gulp.dest('./build/'));
});

// TODO: Break-out asset types to facilitate the minifying/uglifying of CSS and JS files
gulp.task('assets', function() {
    return gulp.src(assetFiles)
        .on('error', interceptErrors)
        .pipe(gulp.dest('./build/assets/'));
});

// Grab All html files and output them to a templateCache for super fast loading
gulp.task('views', function() {
    return gulp.src(viewFiles)
        .pipe(templateCache({
            standalone: true
        }))
        .on('error', interceptErrors)
        .pipe(rename("app.templates.js"))
        .pipe(gulp.dest('./src/app/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'assets', 'browserify'], function() {
    var html = gulp.src("build/index.html")
        .pipe(gulp.dest('./dist/'));

    // TODO: Break-out asset types to facilitate the minifying/uglifying of CSS and JS files
    var assets = gulp.src("build/assets/**/**.**")
        .pipe(gulp.dest('./dist/assets/'));

    var js = gulp.src("build/main.js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

    return merge(html, assets, js);
});

gulp.task('default', ['html', 'browserify'], function() {

    browserSync.init(['./build/**/**.**'], {
        server: "./build",
        port: 4000,
        notify: false,
        ui: {
            port: 4001
        }
    });

    gulp.watch("src/index.html", ['html']);
    gulp.watch(viewFiles, ['views']);
    gulp.watch(assetFiles, ['assets']);
    gulp.watch(jsAppFiles, ['browserify']);
});