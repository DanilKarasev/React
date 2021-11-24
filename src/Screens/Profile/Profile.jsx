import React from "react";
import "./Profile.sass"

export const Profile = () => {
    return (
        <div className={"Profile"}>
            <div className={"Profile-header"}>Profile name</div>
            <div className={"Profile-info"}>
                <div className={"Profile-info-content"}>Some profile info</div>
            </div>
        </div>
    )
}