import { SidebarData } from "./SidebarData" 

export default function Sidebar(){
return(
    <div className="sidebar">
        <ul className="sidebarList">
            {
                SidebarData.map((value,key) => {
                    return( 
                        <li key = {key} className="row" id={window.location.pathname == value.link ? "active" : ""}
                            onClick={() => {window.location.pathname = value.link}}>
                            <div id="icon">{value.icon}</div>
                            <div id="title">{value.title}</div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
}