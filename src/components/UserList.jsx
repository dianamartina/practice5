import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

// Observatie: Componenta UserList a redevenit o componenta declarata cu function.
function UserList(props){
    const {users, deleteUser} = props;          
    
      return (
        <div className="user-list">
            <h2>Users list:</h2>
            { users.map((user, index) => {
                return <UserItem
                    // adaugam prop-ul id componentei UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                    deleteUser={deleteUser}// functie ce se paseaza ca prop de la parinte catre nepot(UserItem)
                />                   
            })}
            
        </div>
        );
    
}

export default UserList;