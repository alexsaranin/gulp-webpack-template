import { paths } from '../config'
import { series, watch } from 'gulp'
import fonts from './fonts'
import html from './html'
import images from './images'
import scripts from './scripts'
import sprites from './sprites'
import styles from './styles'
import video from './video'

export default function watching() {
  watch(paths.fonts.watch, series(fonts))
  watch(paths.html.watch, series(html))
  watch(paths.images.watch, series(images))
  watch(paths.scripts.watch, series(scripts))
  watch(paths.sprites.watch, series(sprites))
  watch(paths.styles.watch, series(styles))
  watch(paths.video.watch, series(video))
}
