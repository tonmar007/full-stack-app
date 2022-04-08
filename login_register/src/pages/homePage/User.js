import React from "react";

function User({user}) {
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.name}</td>
    </tr>
  )
}

export default User;