import React from "react";
import s from'./ProfileInfo.module.css';


const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    )
}


export default ProfileInfo;