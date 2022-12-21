import { useEffect, useState } from 'react';
import classnames from 'classnames';

import { getLevels } from 'store';

const levelClassNames = [
  'jd-badge--accent',
  'jd-badge--success',
  'jd-badge--accent-secondary',
  'jd-badge--error',
];

const getLabelAndIndex = (levels, id) => {
  for (let i = 0; i < levels.length; i += 1) {
    if (levels[i].id === id) {
      const levelLabel = levels[i].label;
      const levelIndex = i;

      return [levelLabel, levelIndex];
    }
  }

  return [];
};

function Level({ level }) {
  const [levelId] = level;
  const [levels, setLevels] = useState([]);
  const [levelLabel, levelIndex] = getLabelAndIndex(levels, levelId);

  // TODO: перенести список уровней сложности в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getLevels();

      if (isMounted) {
        setLevels(data);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  return (
    <p
      className={classnames(
        'jd-badge',
        levelClassNames[levelIndex],
        'jd-card__level',
      )}
    >
      {levelLabel}
    </p>
  );
}

export default Level;
