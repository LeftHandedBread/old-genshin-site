const setTheme = theme => document.documentElement.className = theme;

function setThemeGreen(){
    document.getElementById("logo").src="images/logos/logo-green.svg"
    document.getElementById("foot-logo").src="images/logos/foot-logo-green.svg"
}

function setThemeLight() {
    document.getElementById("logo").src="images/logos/logo-black.svg"
    document.getElementById("foot-logo").src="images/logos/foot-logo-black.svg"
}

function setThemeDark() {
    document.getElementById("logo").src="images/logos/logo-white.svg"
    document.getElementById("foot-logo").src="images/logos/foot-logo-gold.svg"

}

