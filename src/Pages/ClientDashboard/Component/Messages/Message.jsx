import "./Message.css"
const Message = () => {
    let unreadMessage = 10;
    let allMessages = 20;
    let sentMessages = 13;
    const readStyle = {
        color: 'green',
    }
    const UnReadStyle = {
        color: 'red',
    }
    const all = {
        color: 'teal',
    }


    return (
        <>
            <h1>you have <span style={all}>{allMessages} </span> messages</h1><b></b>
            <h1>you have <span style={UnReadStyle}>{unreadMessage} </span> unread messages</h1><b></b>
            <h1>you have <span style={readStyle}>{sentMessages} </span> sent messages</h1><b></b>
        </>

    )

}
export default Message;