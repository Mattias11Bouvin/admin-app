import React, { useState } from "react";

function DataTablePageOne() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", email: "" });

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currentUser.name || !currentUser.email) return;
    if (editing) {
      editUser(currentUser.id, currentUser);
    } else {
      addUser(currentUser);
    }
    setCurrentUser({ id: null, name: "", email: "" });
  };

  const startEditing = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  return (
    <div className="container">
      <h1>Add or Edit User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input"
          type="text"
          name="name"
          value={currentUser.name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input className="input"
          type="text"
          name="email"
          value={currentUser.email}
          onChange={handleInputChange}
        />
        <button className="action1">{editing ? "Update" : "Add"}</button>
      </form>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="action1" onClick={() => startEditing(user)}>Edit</button>
                <button className="action1" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTablePageOne;
