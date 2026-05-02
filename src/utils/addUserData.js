import React from "react";
import useGlobalStore from "../Data/globalStore";

const addUserData = (data) => {
  const addUserInfo = useGlobalStore((state) => state.addUserInfo);
  const userInfo = useGlobalStore((state) => state.UserInfo);
  addUserInfo(data);
  console.log(userInfo);
};

export default addUserData;
