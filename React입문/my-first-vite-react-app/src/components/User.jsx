import React from "react";
import Button from "./Button";
const User = ({ user, squreStyle, deleteUserHandler }) => {
  const { age, name, id } = user;

  return (
    <div style={squreStyle}>
      <div>
        {age}살 - {name}
      </div>
      <div>
        <Button color="red" onClick={() => deleteUserHandler(id)}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default User;
