import { paths } from '../config'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import imagemin from 'gulp-imagemin'
import imageminPngquant from 'imagemin-pngquant'
import imageminZopfli from 'imagemin-zopfli'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminGiflossy from 'imagemin-giflossy'
import newer from 'gulp-newer'
import browserSync from 'browser-sync'
import yargs from 'yargs'

const argv = yargs.argv
const isProduction = !!argv.production

export default function images() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      gulpif(
        isProduction,
        imagemin([
          imageminGiflossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2,
          }),
          imageminPngquant({
            speed: 5,
            quality: [0.6, 0.8],
          }),
          imageminZopfli({
            more: true,
          }),
          imageminMozjpeg({
            progressive: true,
            quality: 90,
          }),
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { removeUnusedNS: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
              { removeComments: true },
              { removeEmptyAttrs: true },
              { removeEmptyText: true },
              { collapseGroups: true },
            ],
          }),
        ])
      )
    )
    .pipe(gulp.dest(paths.images.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
}
