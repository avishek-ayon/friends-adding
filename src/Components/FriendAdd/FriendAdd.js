import React from 'react';

const FriendAdd = (props) => {
    const friendcart=props.friendcart;
    const total=friendcart.reduce((total,frd)=>total+frd.salary,0)
    return (
        <div>
            <h4>Selected Friend:</h4>
            <p>friend added:{friendcart.length}</p>
            <p>Total balance: {total}</p>
        </div>
    );
};

export default FriendAdd;