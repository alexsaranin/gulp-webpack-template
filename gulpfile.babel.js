import dotEnv from 'dotenv'
dotEnv.config()

export { dev as default } from './gulp/tasks/dev'
export { build } from './gulp/tasks/build'
