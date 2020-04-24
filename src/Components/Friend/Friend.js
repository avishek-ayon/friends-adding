import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Friend = (props) => {
    //console.log(props.friend);
    const{img,name,email,salary,address}=props.friend;
    return (
        <div className="friend">
            <div>
                <img style={{width:"300px"}}  src={props.friend.img} alt=""/>
            </div>
            <div>
                <h4 className="friend-name">{name}</h4>
                <br/>
                <h5><small>Email : {email}</small></h5>
                <h5><small>Salary : ${salary}</small></h5>
                <h5><small>Address: {address.street},{address.suite},{address.city}</small></h5>
                <button 
                className="friend-button"
                onClick={()=>props.handleAddFriend(props.friend)}> 
                <FontAwesomeIcon icon={faUserPlus} />
                Add Friend
                </button>

            </div>
            
            
        </div>
    );
};

export default Friend;