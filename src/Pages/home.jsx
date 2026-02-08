import React , {useState} from 'react'
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const [roomID,setRoomID]= useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const createNewRoom = (e)=>{
    e.preventDefault();
    const id = uuidV4();
    setRoomID(id);
    toast.success('new room created');
    console.log(id);
  };
  const joinRoom = (e)=>{
    if (!roomID || !userName){
      toast.error('Room ID and UserName is required');
      return;
    }
    navigate(`/editor/${roomID}`,{
      state:{           //passes the data from one route to another
        userName,
      }
    });

  };
  const handleInputEnter = (e)=>{
    if (e.code==='Enter'){
      joinRoom();
    }
  }
  return (
    <div className = "homePageWrapper">
      <div className= "formWrapper">
        <img className="homePageLogo" src = "/code-sync.png" alt="code-sync-logo"/>
        <h4 className="mainLabel">Paste Invitation room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="roomID"
            onChange={(e)=>setRoomID(e.target.value)}
            value={roomID}
            onKeyUp={handleInputEnter}            
          />
          <input
            type="text"
            className="inputBox"
            placeholder="UserName"
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleInputEnter}   
          />
          <button onClick={joinRoom}className="btn joinBtn"> JOIN</button>
          <span className='createInfo'>
            if you dont have an invite then create &nbsp;
            <a onClick={createNewRoom}href="" className="createNewBtn">
              new Room
            </a>
          </span>
        </div>
      </div>
        <footer>
          <h4>
            built with ❤️ by &nbsp;
            <a href="https://github.com/vans-aj">Vansaj</a>
          </h4>
        </footer>
    </div>
  )
}

export default Home
