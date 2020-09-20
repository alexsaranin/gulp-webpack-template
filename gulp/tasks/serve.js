import browserSync from 'browser-sync'

export default function serve() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    port: 3000,
    tunnel: true,
  })
}
