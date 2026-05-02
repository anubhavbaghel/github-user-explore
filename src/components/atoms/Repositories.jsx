import React from "react";
import useGlobalStore from "../../Data/globalStore";

const Repositories = () => {
  const userInfo = useGlobalStore((state) => state.userInfo);

  return (
    <div className="rounded-[10px] bg-white py-2 w-full flex flex-col items-center border border-gray-400">
      <h2 className="text-blue-500">{userInfo.public_repos}</h2>
      <p>REPOSITORIES</p>
    </div>
  );
};

export default Repositories;
