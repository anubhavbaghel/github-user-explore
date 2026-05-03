import React from "react";
import UserCard from "../molecules/UserCard";
import useGlobalStore from "../../Data/globalStore";

const UserSection = () => {
  const userInfo = useGlobalStore((state) => state.userInfo);

  return (
    <div className="flex flex-col w-full h-full">
      <UserCard />
    </div>
  );
};

export default UserSection;
