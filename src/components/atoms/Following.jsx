import React from "react";
import mockUsers from "../../Data/MockData";
import useGlobalStore from "../../Data/globalStore";

const Following = () => {
  const userInfo = useGlobalStore((state) => state.userInfo);

  return (
    <div className="rounded-[10px] bg-white py-2 w-full flex flex-col items-center border border-gray-400">
      <h2 className="text-blue-500">{userInfo.following}</h2>
      <p>FOLLOWING</p>
    </div>
  );
};

export default Following;
