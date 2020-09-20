import { paths } from '../config'
import gulp from 'gulp'
import svg from 'gulp-svg-sprite'
import debug from 'gulp-debug'
import browserSync from 'browser-sync'

export default function sprites() {
  return gulp
    .src(paths.sprites.src)
    .pipe(
      svg({
        shape: {
          dest: 'intermediate-svg',
        },
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest(paths.sprites.dest))
    .pipe(
      debug({
        title: 'Sprites',
      })
    )
    .on('end', browserSync.reload)
}
