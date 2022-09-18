import {rerenderEntireTree} from '../render'



let state = {
    profile: {
        posts: [{id: 1, message:"Hello",likesCount: 12},{id: 2, message:"Buy",likesCount: 11}],
        newPostText: "Type something here"
        
    },
    dialogsPage: {
        messagesData: [{id: 1, message:"Hello"},{id: 2, message:"Hi"},{id: 3, message:"How are u?"}],
        dialogsData: [{id: 1, name:"Sergey"},{id: 2, name:"Kate"},{id: 3, name:"Alex"}]
    }
    
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profile.newPostText,
        likesCount: 0
    };

    

    state.profile.posts.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {

    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}


export let updateName = (newName) => {
    let newArName = {
        id : newName,
        name : newName
    }
    state.dialogsPage.dialogsData.push(newArName);
}

export let updateMessage = (newMessage) => {
    let newArMessage = {
        id : newMessage,
        name : newMessage
    }
    state.dialogsPage.dialogsData.push(newArMessage);
}

export default state;

