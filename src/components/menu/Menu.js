import { MenuData } from "./MenuData"

export default function Menu(){
    return(
        <div className="menu">
            {
                MenuData.map((value) =>{
                    return(
                        <>
                            <div id="icon" onClick={() => {window.location.pathname = value.link}}>{value.icon}</div>
                        </>
                    )
                })
            }
        </div>
    )
}