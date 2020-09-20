import { paths } from '../config'
import smartGridPackage from 'smart-grid'

export default function smartGrid(cb) {
  smartGridPackage(paths.smartGrid.dest, {
    outputStyle: 'scss',
    filename: 'smart-grid',
    columns: 12,
    offset: '30px',
    mobileFirst: true,
    mixinNames: {
      container: 'container',
    },
    container: {
      fields: '15px',
    },
    breakPoints: {
      xs: {
        width: '320px',
      },
      sm: {
        width: '576px',
      },
      md: {
        width: '768px',
      },
      lg: {
        width: '992px',
      },
      xl: {
        width: '1200px',
      },
    },
  })

  cb()
}
