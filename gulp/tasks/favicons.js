import { paths } from '../config'
import gulp from 'gulp'
import gulpFavicons from 'gulp-favicons'

export default function favicons() {
  return gulp
    .src(paths.favicons.src)
    .pipe(
      gulpFavicons({
        icons: {
          appleIcon: true,
          favicons: true,
          online: false,
          appleStartup: false,
          android: false,
          firefox: false,
          yandex: false,
          windows: false,
          coast: false,
        },
      })
    )
    .pipe(gulp.dest(paths.favicons.dest))
}
