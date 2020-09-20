import { paths } from '../config'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import browserSync from 'browser-sync'
import yargs from 'yargs'
import gulpif from 'gulp-if'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from '../../webpack.config'

const argv = yargs.argv
const isProduction = !!argv.production

webpackConfig.mode = isProduction ? 'production' : 'development'
webpackConfig.devtool = isProduction ? false : 'source-map'

export default function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulpif(isProduction, rename({ suffix: '.min' })))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
}
