import React from "react";
import useGlobalStore from "../../Data/globalStore"

const Followers = () => {
    const userInfo = useGlobalStore((state) => (state.userInfo))

  return (
    <div className="rounded-[10px] bg-white py-2 w-full flex flex-col items-center border border-gray-400">
      {(userInfo.followers > 1000) ? (<h2 className="text-blue-500">{((userInfo.followers) / 1000).toFixed(0)} K</h2>) : 
      <h2 className="text-blue-500">{userInfo.followers}</h2> }
      <p>FOLLOWERS</p>
    </div>
  );
};

export default Followers;
