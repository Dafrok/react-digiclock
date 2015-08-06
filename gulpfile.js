var
  gulp=require('gulp'),
  stylus=require('gulp-stylus'),
  jade=require('gulp-jade'),
  webpack=require('webpack-stream'),
  browserSync=require('browser-sync'),
  autoprefixer=require('gulp-autoprefixer'),
  uglify=require('gulp-uglify'),
  plumber=require('gulp-plumber')

var
  paths={
    dev:{
      jade:'src/jade/*.jade',
      jsx:'src/jsx/**',
      stylus:'src/stylus/**'
    },
    build:{
      html:'build',
      js:'build/js'
    }
  }

gulp.task('browser-sync',function(){
  browserSync({
    server:{
      baseDir:"./build/"
    }
  })
  gulp.watch(paths.dev.jade,['jade'])
  gulp.watch([paths.dev.jsx,paths.dev.stylus],['webpack'])
  gulp.watch(['build/**','src/**'],['reload'])
})

gulp.task('reload',function(){
  return browserSync.reload()
})

gulp.task('jade',function(){
  return gulp.src(paths.dev.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.build.html))
})

gulp.task('stylus',function(){
})

gulp.task('webpack',function(){
  return gulp.src([paths.dev.jsx])
    .pipe(plumber())
    .pipe(webpack({
      entry:'./src/jsx/entry.jsx',
      output:{
        filename:'bundle.js'
      },
      module:{
        loaders:[
          {test:/\.jsx?$/,loader: 'babel-loader'},
          {test:/\.styl?$/,exclude: /(node_modules|bower_components)/,loader: 'style-loader!css-loader!stylus-loader!autoprefixer-loader'}
        ]
      },
      stage:0
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build.js))
})

gulp.task('default',['browser-sync','webpack'])