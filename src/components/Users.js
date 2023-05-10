import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <h2>Users List</h2>
      <table border="1" cellPadding="0" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>WebAddress</th>
          </tr>
        </thead>
        {/* {console.log(users)} */}
        {users.map((user, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          );
        })}
        <tbody></tbody>
      </table>
    </>
  );
};

export default Users;
