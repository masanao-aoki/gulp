var gulp = require('gulp');
var typescript = require('gulp-tsc');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

var pleeease = require('gulp-pleeease');

var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');


var publicDirectory = 'public';
var serverDirectory = '.';

var ts = 'typescript';
var es6 = 'es6';
var js = 'js';
var sass = 'sass';
var css = 'css';

var dest = '_min';


//TypeScript
var typescriptDirectory = publicDirectory + '/' + ts + '/';
var typescriptWatchFiles = typescriptDirectory + '**/*.ts';
var jsDirectory = publicDirectory + '/' + js + '/';
gulp.task('typescript', function(){
	gulp.src([typescriptWatchFiles])
	.pipe(plumber())
	.pipe(typescript({module:"amd"}))
	.pipe(gulp.dest(jsDirectory));
});

//es6
var es6Directory = publicDirectory + '/' + es6 + '/';
var es6WatchFiles = es6Directory + '**/*.js';
var jsDirectory = publicDirectory + '/' + js + '/';
gulp.task('es6', function(){
	gulp.src([es6WatchFiles])
	.pipe(plumber())
	.pipe(babel({modules: 'amd'}))
	.pipe(gulp.dest(jsDirectory));
});

//TypeScript commonjs
var typescriptCommonjsDirectory = serverDirectory + '/' + ts + '/';
var typescriptCommonjsWatchFiles = typescriptCommonjsDirectory + '**/*.ts';
var commonjsDirectory = serverDirectory + '/' + js + '/';
gulp.task('typescriptCommonjs', function(){
	gulp.src([typescriptCommonjsWatchFiles])
	.pipe(plumber())
	.pipe(typescript({module:"commonjs"}))
	.pipe(gulp.dest(commonjsDirectory));
});

//Compass
var sassDirectory = publicDirectory + '/' + sass + '/';
var cssDirectory = publicDirectory + '/' + css + '/';
var sassWatchFiles = sassDirectory + '**/*.scss';
var cssWatchFiles = cssDirectory + '**/*.css';
gulp.task('compass', function(){
	gulp.src([sassWatchFiles])
	.pipe(plumber())
	.pipe(compass({
		config_file : 'config.rb',
		comments : false,
		css : cssDirectory,
		sass: sassDirectory
	}))
	.pipe(pleeease({
		autoprefixer: {
			browsers: ["last 5 versions", "Firefox > 0", "Opera > 0", "ie > 7", "Chrome > 20"]
		},
		minifier: false
	}))
	.pipe(gulp.dest(cssDirectory));
});

//CSS min
var cssDestDirectory = publicDirectory + '/' + css + dest + '/';
gulp.task('cssmin', function(){
	gulp.src(cssWatchFiles)
	.pipe(plumber())
	.pipe(minify())
	.pipe(gulp.dest(cssDestDirectory));
});

//JS min
var jsWatchFiles = jsDirectory+ '**/*.js';
var jsNotWatchFiles = '!' + jsDirectory + 'components/**/*.js';
var jsDestDirectory = publicDirectory + '/' + js + dest + '/';
gulp.task('jsmin', function(){
	gulp.src([jsWatchFiles, jsNotWatchFiles])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(jsDestDirectory));
});

//watch
gulp.task('watch', ['es6', 'typescript', 'typescriptCommonjs', 'compass'], function(){
	gulp.watch(es6WatchFiles, ['es6']);
	gulp.watch(typescriptWatchFiles, ['typescript']);
	gulp.watch(typescriptCommonjsWatchFiles, ['typescriptCommonjs']);
	gulp.watch(sassWatchFiles, ['compass']);
});

//default
gulp.task('default', ['watch']);
//min
gulp.task('min', ['cssmin','jsmin']);