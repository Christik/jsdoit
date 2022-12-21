import { useEffect, useState } from 'react';
import classnames from 'classnames';

import { getResources } from 'store';

const ResourceIconClassNames = [
  'jd-icon--figma',
  'jd-icon--code',
];

function PetCardResourceList({ resourceIds }) {
  const [allResources, setAllResources] = useState([]);

  // TODO: перенести список всех ресурсов в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getResources();

      if (isMounted) {
        setAllResources(data);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  if (!resourceIds || allResources.length === 0) {
    return null;
  }

  return (
    <ul className="jd-card__sources">
      {resourceIds.map((id, index) => {
        const { label } = allResources.find((resource) => resource.id === id);

        return (
          <li className="jd-card__source" key={id}>
            <span className={classnames(
              'jd-icon',
              ResourceIconClassNames[index],
              'jd-card__source__icon',
            )}
            />
            <span className="jd-card__source__text">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default PetCardResourceList;
