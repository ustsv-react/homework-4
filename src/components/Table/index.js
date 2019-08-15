import React from "react";

const Table = ({ users = [], handleClick }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Username</th>
        <th>Image</th>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr className="row" key={index} onClick={() => handleClick(user.login)}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td><img src={user.avatar_url} alt={user.login} style={{width: "40px", height: "40px"}}/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
