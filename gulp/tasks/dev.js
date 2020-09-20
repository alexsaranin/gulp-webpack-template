import { parallel, series } from 'gulp'
import { build } from './build'
import serve from './serve'
import watch from './watch'

export const dev = series(build, parallel(watch, serve))
