import React, { useEffect, useState } from "react";

export default function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    return (
        <div className="header">
            <div className="invisible"></div>
            <div className="title">
                <h1>User Management Application</h1>
            </div>
                <div className="time">
                    <p>{time.toLocaleTimeString()}</p>
                </div>
        </div>
    );
}
