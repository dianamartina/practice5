import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {id, name, email, isGoldClient, deleteUser} = props;   
   
        return (
            <div className="user-item">
                <h3>{ name }</h3>
                <p>{ email }</p>
                { isGoldClient
                    ? <h4>Gold Client</h4>
                    : null
                }
                <button onClick={ () => deleteUser(id) }>Delete user</button>                
            </div>
            
        );    
}
export default UserItem;