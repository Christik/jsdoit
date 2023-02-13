import './solution.scss';

import { useState, useEffect } from 'react';
import { getGithubRepo } from 'services';

import { Loader, TagGroup } from 'features/ui';

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

function Solution({ url }) {
  const [repository, setRepository] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const [owner, repo] = extractGitHubRepoPath(url);

    const initRepository = async () => {
      const data = await getGithubRepo(owner, repo);

      if (data === null) {
        setIsError(true);
        return;
      }

      setRepository(data);
    };

    initRepository();
  }, []);

  console.log(repository);

  if (isError) {
    return null;
  }

  if (repository === null) {
    return <Loader />;
  }

  const {
    owner,
    html_url: repoUrl,
    homepage,
    description,
    topics,
  } = repository;

  return (
    <article className="jd-solution">
      {/* <p>
        Дата обновления:
        {repo.pushed_at}
      </p> */}

      <div className="jd-solution__body">
        <a
          className="jd-user"
          href={owner.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="jd-user__avatar"
            src={owner.avatar_url}
            width="40"
            height="40"
            alt={owner.login}
          />
          <span className="jd-user__name">
            {owner.login}
          </span>
        </a>

        <ul className="jd-solution__links">
          <li>
            <a
              className="jd-button jd-button--s jd-button--outline"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Код
              <span className="jd-icon jd-icon--github jd-button__icon" />
            </a>
          </li>

          { homepage !== null && (
            <li>
              <a
                className="jd-button jd-button--s jd-button--outline"
                href={homepage}
                target="_blank"
                rel="noreferrer"
              >
                Просмотр
                <span className="jd-icon jd-icon--external-link jd-button__icon" />
              </a>
            </li>
          )}
        </ul>
      </div>

      { description !== null && (
        <p className="jd-solution__description jd-text-body">
          {description}
        </p>
      )}

      { topics.length !== 0 && (
        <ul className="jd-solution__tags">
          <TagGroup tags={topics} />
        </ul>
      )}
    </article>
  );
}

export default Solution;
