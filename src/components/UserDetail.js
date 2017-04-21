import React from "react";
import UserInfo from "./UserInfo"

function UserDetail(props) {
  const { user } = props;
  return (
    <div>
      <UserInfo user={user} />
      <img alt={user.first_name} src={user.avatar} />
    </div>
  );
}

export default UserDetail;
