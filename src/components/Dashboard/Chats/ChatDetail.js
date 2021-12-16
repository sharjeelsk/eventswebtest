
import React from 'react'
import Button from '@mui/material/Button'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {connect} from 'react-redux'
import {updateSocket} from '../../redux/socket/socketActions'
function ChatDetailT(props) {
    const [message,setMessage]=React.useState("")
    const [newMessages,setNewMessages]=React.useState([])
    React.useEffect(()=>{
      console.log("props of chat detail",props);

        props.socket.on("receive_message", (msg) => {
            console.log("messagesrecived",msg,props);
            //setNewMessages((prevMsg)=>[...prevMsg,msg]);
            console.log("propsmessages is",props.messages);
            props.updateSocket(msg)

            setMessage("")
          });
    },[props.socket])
    const handleSubmit = async ()=>{
        if (message !== "") {

            const messageData = {
              room: props.room,
              sender: props.username,
              text: message,
            };
      
            await props.socket.emit("send_message", messageData);
            // setMessageList((list) => [...list, messageData]);
            // console.log(messageList,"____________________")
            setMessage("");
          }
    }

    return (
        <div className="chat-detail">
            {props.name!==""?<div>
            <div className="header">
                <h2>{props.name}</h2>
            </div>
            {/* user chats */}
            
            <div className="userchats">
        {
            props.messages.length>0?(
                props.messages.map((item,index)=>(
                    <div key={index} className={item.sender===props.EventUser.userInfo._id?"mychat":"senderchat"}>
                    <span>{item.text}</span>
                    
                    </div>
                ))
            ):null
        }
          {/* {
           newMessages.length>0?(
               newMessages.map((item,index)=>(
                <div key={index} className={item.sender===props.EventUser.userInfo._id?"mychat":"senderchat"}>
                <span>{item.text}</span>
                
                </div>
                ))
            ):null
        } */}

    </div>

      {/* user chats */}

            <div className="input-div">
            <input 
            placeholder="Enter Message"
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
            onKeyPress={(e)=>e.key==="Enter" && handleSubmit()}
            />
            <Button 
            endIcon={<SendRoundedIcon />}
            onClick={()=>handleSubmit()} type="submit">send</Button>
            </div>

        </div>:<div>chat detail</div>}
        </div>
    )
}
const mapStateToProps = ({socket,EventUser})=>{
    return {
        EventUser,
        messages:socket.messages
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateSocket:(messages)=>dispatch(updateSocket(messages))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ChatDetailT)
