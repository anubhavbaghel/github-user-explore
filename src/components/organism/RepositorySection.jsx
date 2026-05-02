import React from "react";
import useGlobalStore from "../../Data/globalStore"

const RepositorySection = () => {

  const userRepoInfo = useGlobalStore((state) => (state.userRepoInfo))

  return (
    <div className="flex flex-col gap-2" id="repositories">
      <h2>Respositories</h2>
      <div className="flex flex-col gap-2 py-2">
        {userRepoInfo.map((repo) => (
          <div
            key={repo.id}
            className=" flex flex-col px-3 py-2 gap-2 border border-gray-500 rounded-[10px]"
          >
            <div className="flex flex-row">
              <span className="material-symbols-outlined text-[#0051AE]">book</span>
              <a href={repo.clone_url}>
                <h3 className="text-[#0051AE] font-bold">{repo.name}</h3>
              </a>
            </div>
            <p>{repo.description}</p>
            <div className="flex gap-3">
              <p>Last Updated {new Date(repo.updated_at).toLocaleDateString('en-US',{
                month: 'short',
                year: 'numeric',
                day: 'numeric'
              }
              )}</p>
              {(repo.language) ? (<p className="border border-gray-500 rounded-2xl px-2 bg-blue-200 text-grey-100">{repo.language}</p>) : <p className="border border-gray-500 rounded-2xl px-2 bg-blue-200 text-grey-100">NA</p> }
              <div className="flex">
                <span class="material-symbols-outlined text-gray-600">star</span>
                <p>{repo.stargazers_count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositorySection;
