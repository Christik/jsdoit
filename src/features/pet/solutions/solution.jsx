import './solution.scss';

import { TagGroup } from 'features/ui';

function Solution({ repository }) {
  const {
    owner,
    html_url: repoUrl,
    homepage,
    description,
    topics,
  } = repository;

  return (
    <article className="jd-solution">
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
