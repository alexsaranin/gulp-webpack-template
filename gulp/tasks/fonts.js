import { paths } from '../config'
import gulp from 'gulp'
import browserSync from 'browser-sync'

export default function fonts() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
}
