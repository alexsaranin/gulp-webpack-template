import gulp from 'gulp'
import { paths } from '../config'
import del from 'gulp-clean'

export default function clean() {
  return gulp.src(paths.clean.src, { read: false }).pipe(del())
}
