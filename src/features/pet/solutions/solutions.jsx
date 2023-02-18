import { useEffect, useState } from 'react';

import { getSolutions } from 'store';
import { SolutionList, EmptySolutionList } from 'features/pet';

function Solutions(props) {
  const { className, ids } = props;
  const [solutions, setSolutions] = useState(null);

  useEffect(() => {
    const initSolutions = async () => {
      if (ids) {
        const data = await getSolutions(ids[0]);
        const urls = data
          .filter(({ id }) => ids.includes(id))
          .map(({ url }) => url);

        setSolutions(urls);
        return;
      }

      setSolutions([]);
    };

    initSolutions();
  }, [ids]);

  if (solutions === null) {
    return null;
  }

  return (
    <section className={className}>
      <h2 className="jd-text-title jd-text-title--s jd-spacer-bottom-l">
        Решения
      </h2>

      {
        solutions.length !== 0
          ? <SolutionList urls={solutions} />
          : <EmptySolutionList />
      }
    </section>
  );
}

export default Solutions;
