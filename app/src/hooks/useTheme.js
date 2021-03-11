import { theme } from 'theme'

const useTheme = (style = () => {}) => style(theme)

export default useTheme
