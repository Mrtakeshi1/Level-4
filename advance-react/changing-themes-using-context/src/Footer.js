import themeContext from "./themeContext"
import { useContext } from "react"

function Footer(){
    const theme = useContext(themeContext)

    return(
        <div className={`${theme.color}-footer-container`}>
            <h5>Footer</h5>
        </div>
    )
}

export default Footer