import { theme } from 'theme'

const useTheme = (style = () => theme) => style(theme)

export default useTheme
