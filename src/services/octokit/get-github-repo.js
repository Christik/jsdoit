import { octokit } from 'services';

const getGithubRepo = async (owner, repo) => {
  try {
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}',
      { owner, repo },
    );

    return response.data;
  } catch (error) {
    return null;
  }
};

export default getGithubRepo;
