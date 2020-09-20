import { paths } from '../config'
import { dest, src } from 'gulp'
import gcmq from 'gulp-group-css-media-queries'
import sass from 'gulp-sass'
import gulpif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import mincss from 'gulp-clean-css'
import browserSync from 'browser-sync'
import yargs from 'yargs'

const argv = yargs.argv
const isProduction = !!argv.production

export default function styles() {
  return src(paths.styles.src)
    .pipe(gulpif(!isProduction, sourcemaps.init()))
    .pipe(sass())
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(
      gulpif(
        isProduction,
        mincss({
          compatibility: 'ie8',
          level: {
            1: {
              specialComments: 0,
              removeEmpty: true,
              removeWhitespace: true,
            },
            2: {
              mergeMedia: true,
              removeEmpty: true,
              removeDuplicateFontRules: true,
              removeDuplicateMediaBlocks: true,
              removeDuplicateRules: true,
              removeUnusedAtRules: false,
            },
          },
        })
      )
    )
    .pipe(
      gulpif(
        isProduction,
        rename({
          suffix: '.min',
        })
      )
    )
    .pipe(gulpif(!isProduction, sourcemaps.write('./maps/')))
    .pipe(dest(paths.styles.dest))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
}
