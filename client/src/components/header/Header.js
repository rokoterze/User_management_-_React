import React, { useEffect, useState, useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";

export default function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="header" id={theme}>
            <div className="invisible"></div>
            <div className="title">
                <h1>User Management Application</h1>
            </div>
            <div className="content">
                <div className="switch">
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
                <div className="time">
                    <p>{time.toLocaleTimeString()}</p>
                </div>
            </div>


        </div>
    );
}
