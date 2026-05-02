import useGlobalStore from "../Data/globalStore";
import { Octokit } from "octokit";

const octokit = new Octokit();

const fetchRepoData = async (userInput) => {
  try {
    const result = await octokit.request("GET /users/{username}/repos", {
      username: userInput,
    });
    console.log(
      `Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`,
    );

    return (result.data)
  } catch (error) {
    console.log(
      `Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`,
    );
  }
};

export default fetchRepoData;
