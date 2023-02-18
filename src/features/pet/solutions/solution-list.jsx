import './solution-list.scss';

import { useEffect, useState } from 'react';
import { getGithubRepo } from 'services';

import { Solution } from 'features/pet';

const extractGitHubRepoPath = (ghUrl) => {
  if (!ghUrl) {
    return null;
  }

  const match = ghUrl.match(
    /^https?:\/\/(www\.)?github.com\/(?<owner>[\w.-]+)\/(?<name>[\w.-]+)/,
  );

  if (!match || !(match.groups?.owner && match.groups?.name)) {
    return null;
  }

  return [match.groups.owner, match.groups.name];
};

function SolutionList({ urls }) {
  const [solutions, setSolutions] = useState(null);

  useEffect(() => {
    const initSolutions = async () => {
      const promises = urls.map((url) => {
        const [owner, repo] = extractGitHubRepoPath(url);
        return getGithubRepo(owner, repo);
      });

      const responses = await Promise.all(promises);
      const validResponses = responses.filter((response) => response !== null);

      setSolutions(validResponses);
    };

    initSolutions();
  }, [urls]);

  if (solutions === null) {
    return null;
  }

  return (
    <ul className="jd-solution-list">
      {
        solutions.map((solution) => (
          <li key={solution.html_url}>
            <Solution repository={solution} />
          </li>
        ))
      }
    </ul>
  );
}

export default SolutionList;
