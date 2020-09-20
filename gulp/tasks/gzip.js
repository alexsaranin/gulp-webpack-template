import { paths } from '../config'
import gulp from 'gulp'
import debug from 'gulp-debug'

export default function gzip() {
  return gulp
    .src(paths.gzip.src)
    .pipe(gulp.dest(paths.gzip.dest))
    .pipe(
      debug({
        title: 'GZIP config',
      })
    )
}
