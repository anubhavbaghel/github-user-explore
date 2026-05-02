import React from "react";
import Avatar from "../atoms/Avatar";
import Bio from "../atoms/Bio";
import Followers from "../atoms/Followers";
import Following from "../atoms/Following";
import Repositories from "../atoms/Repositories";

const UserCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 py-10">
      <div className="user-bio-section flex flex-row rounded-[10px] bg-white sm:w-[60%] gap-5 items-center border border-gray-400 px-5 py-5">
        <Avatar />
        <Bio />
      </div>
      <div className="user-follower-section flex flex-col  sm:w-[40%] gap-5 justify-between">
        <Followers />
        <Following />
        <Repositories/>
      </div>
    </div>
  );
};

export default UserCard;
