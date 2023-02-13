import './solution-list.scss';

import { Solution } from 'features/pet';

function SolutionList({ urls }) {
  return (
    <ul className="jd-solution-list">
      {
        urls.map((url) => (
          <li key={url}>
            <Solution url={url} />
          </li>
        ))
      }
    </ul>
  );
}

export default SolutionList;
