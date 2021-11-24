import React from "react";
import "./Home.sass"

export const Home = () => {
    return (
        <div className={"Home"}>
            <div className={"Home-header"}>Welcome!</div>
            <div className={"Home-info"}>
                <p>Please select chat to start messaging</p>
            </div>
        </div>
    )
}