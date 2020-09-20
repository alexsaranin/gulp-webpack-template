export const paths = {
  clean: {
    src: './dist/*',
  },
  favicons: {
    src: './src/img/favicons/*.{jpg,jpeg,png,gif}',
    dest: './dist/favicons/',
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2}',
    dest: './dist/fonts/',
    watch: 'src/fonts/**/*',
  },
  gzip: {
    src: './src/.htaccess',
    dest: './dist/',
  },
  html: {
    src: 'src/pages/**/*.html',
    dest: './dist/',
    watch: ['src/**/*.html', 'src/**/*.json', 'src/**/*.js'],
  },
  images: {
    src: './src/img/**/*.{jpg,jpeg,png,gif,svg,mp4}',
    dest: './dist/img/',
    watch: 'src/img/**/*',
  },
  scripts: {
    src: ['src/js/**/*.js', 'src/pages/**/*.js'],
    dest: './dist/js/',
    watch: ['src/js/**/*.js', 'src/blocks/**/*.js', 'src/pages/**/*.js'],
  },
  smartGrid: {
    dest: './src/styles/libs',
  },
  sprites: {
    src: './src/icons/*.svg',
    dest: './dist/sprites/',
    watch: './src/icons/*.svg',
  },
  styles: {
    src: './src/styles/common.scss',
    dest: './dist/css',
    watch: [
      'src/styles/**/*.scss',
      'src/blocks/**/*.scss',
      'src/pages/**/*.scss',
    ],
  },
  video: {
    src: './src/video/**/*',
    dest: './dist/video',
    watch: './src/video/**/*',
  },
}
