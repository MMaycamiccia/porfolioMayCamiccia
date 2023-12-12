
import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css"

function LandingPage () {

return (
<div className={style.body}> 

<Link className={style.btn} to = "/home">

<button className= {style.button}> Ingresar </button>

</Link>
     
    </div>

)

}

export default LandingPage;