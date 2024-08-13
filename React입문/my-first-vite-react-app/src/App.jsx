import React, { useState } from "react";
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const style = {
    display: "flex",
    gap: "12px",
    padding: "50px",
  };

  const squreStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  // const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];
  const [users, setUsers] = useState([
    {
      id: new Date().getTime(),
      age: 24,
      name: "송중기",
    },
    {
      id: new Date().getTime() + 1,
      age: 55,
      name: "송강",
    },
    {
      id: new Date().getTime() + 2,
      age: 44,
      name: "김유정",
    },
    {
      id: new Date().getTime() + 3,
      age: 11,
      name: "구교환",
    },
  ]);

  const addUserHandler = () => {
    const newUser = {
      id: new Date().getTime(),
      age: Number(age),
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const deletedUsers = users.filter(function (user) {
      return user.id != id;
    });
    setUsers(deletedUsers);
  };

  const [age, setAge] = useState(0);
  const [name, setname] = useState("");
  return (
    <>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <Button color="green" onClick={addUserHandler}>
        추가
      </Button>
      <div style={style}>
        {users
          .filter((user) => user.age <= 25)
          .map(function (user) {
            return (
              <User
                user={user}
                squreStyle={squreStyle}
                deleteUserHandler={deleteUserHandler}
              />
            );
          })}
      </div>
    </>
  );
};

export default App;
