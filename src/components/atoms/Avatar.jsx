import React from "react";
import mockUsers from "../../Data/mockData";
import useGlobalStore from "../../Data/globalStore"

const Avatar = () => {
    const userInfo = useGlobalStore((state) => (state.userInfo))

  return <img className="aspect-square rounded-[10px] w-[30%] max-block-fit " src={userInfo.avatar_url} alt="user-avatar" />;
};

export default Avatar;
