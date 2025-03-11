import React from "react"

function UsersListItem (props){
    const {user,selectUser,isLight}= props
    const {id, isSelected, firstName, lastName } = user
    
     const inlineStyle = {
          backgroundColor: isSelected ? isLight ? 'yellow' : 'violet' : "transparent",
        };
    return (
        <li style={inlineStyle} onClick={()=> selectUser(id)} >
        {firstName} {lastName}
      </li>
    )
    
}

export default UsersListItem