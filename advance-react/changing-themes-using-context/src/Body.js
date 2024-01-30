import themeContext from "./themeContext"
import { useContext } from "react"

function Main(){
    const theme = useContext(themeContext)

    return(
        <div className={`${theme.color}-body-container`}>
            <h1>Click the button to toggle the theme!</h1>

            <select onChange={theme.changeTheme} className="theme-select">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="crazy">Crazy</option>
            </select>
            <h3 className="current-theme">Current Theme: {theme.color}</h3>
        </div>
    )
}

export default Main