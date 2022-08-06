const themeStylesheetLink = document.querySelector('.themeStylesheetLink')

const lightThemeButton = document.querySelector('.themes__button.light')
const darkThemeButton = document.querySelector('.themes__button.dark')

lightThemeButton.addEventListener('click', () => themeStylesheetLink.setAttribute('href', `./css/themes/light.css`))
darkThemeButton.addEventListener('click', () => themeStylesheetLink.setAttribute('href', `./css/themes/dark.css`))
