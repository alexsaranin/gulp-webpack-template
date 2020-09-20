import { paths } from '../config'
import gulp from 'gulp'

export default function video() {
  return gulp.src(paths.video.src).pipe(gulp.dest(paths.video.dest))
}
