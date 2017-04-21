import React from "react";

function ListOfUsers(props) {
  const { users } = props;
  const userDivs = users.map((user, index) => {
    return <div key={index}>{index + 1}. {user.first_name}</div>;
  });
  return (
    <div>{userDivs}</div>
  );
}

export default ListOfUsers;
