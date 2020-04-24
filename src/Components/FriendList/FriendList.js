import React, { useState } from 'react';
import fakeData from '../../fakedata';
import './FriendList.css'
import Friend from '../Friend/Friend';
import FriendAdd from '../FriendAdd/FriendAdd';

const FriendList = () => {
    const first15=fakeData.slice(0,15);
    const[friends,setFriends]= useState(first15);
    const[friendcart,setFriendcart]=useState([]);

    const handleAddFriend=(friend)=>
    {
        let existedFriend = friendcart.find( friends => friends.id ===friend.id)
        if(!existedFriend){
        const newFriendcart=[...friendcart,friend];
        setFriendcart(newFriendcart);
        }

        else
        {
            alert('Friends Already Added');
        }

    }
    //console.log(fakeData);
    return (
        <div className="friend-container">
            <div className="friendlist-container">
            
                {
                    friends.map(fd =><Friend 
                        
                        handleAddFriend={handleAddFriend}
                        friend={fd}
                        ></Friend>)
                }
           
            </div>
            <div className="friendadd-container">
                <FriendAdd friendcart={friendcart}></FriendAdd>
            </div>
    
          
        </div>
    );
};

export default FriendList;