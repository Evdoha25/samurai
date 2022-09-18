import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(item => {
        return (
            <DialogItem name={item.name} id={item.id}/>
        )
    });

    let messagesElements = props.state.messagesData.map(item => {
        return(
            <Message message={item.message}/>
        )
    });

    let newMessage = React.createRef();
    let newName = React.createRef();


    let onMessageChange = () => {
        let text = newName.current.value;
        props.updateNewPostText(text);

    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage} placeholder="Add message"></textarea>
                </div>
                <div>
                    <button>Add new one</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;