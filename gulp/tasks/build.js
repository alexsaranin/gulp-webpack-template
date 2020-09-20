import { parallel, series } from 'gulp'
import clean from './clean'
import favicons from './favicons'
import fonts from './fonts'
import gzip from './gzip'
import html from './html'
import images from './images'
import scripts from './scripts'
import sprites from './sprites'
import smartGrid from './smart-grid'
import styles from './styles'
import video from './video'

export const build = series(
  clean,
  smartGrid,
  parallel(favicons, fonts, gzip, html, images, scripts, sprites, styles, video)
)
