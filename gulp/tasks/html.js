import { paths } from '../config'
import gulp from 'gulp'
import include from 'gulp-file-include'
import gulpif from 'gulp-if'
import replace from 'gulp-replace'
import browserSync from 'browser-sync'
import yargs from 'yargs'

const argv = yargs.argv
const isProduction = !!argv.production

export default function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      include({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulpif(isProduction, replace('.css', '.min.css')))
    .pipe(gulpif(isProduction, replace('.js', '.min.js')))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream())
}
