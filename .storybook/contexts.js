import {ThemeProvider} from 'styled-components'
import {defaultTheme, DarkTheme} from '../src/utils'

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: "Default theme", 
        props: {theme: defaultTheme, default: true}
      },
        {
        name: "Dark theme", 
        props: {theme: DarkTheme}
      }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
]