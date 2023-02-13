import { SolutionList } from 'features/pet';

const solutions = [
  'https://github.com/Christik/form-validator-markup',
  'https://github.com/RyjkovAlexey/leetCode',
  'https://github.com/ufocoder/ufostation.tech',
  'https://github.com/Christik/metaclass.kts.hw-1',
  'https://github.com/Christik/jsdoit',
];

function Solutions({ className }) {
  return (
    <section className={className}>
      <h2 className="jd-text-title jd-text-title--s jd-spacer-bottom-l">
        Решения
      </h2>

      <SolutionList urls={solutions} />
    </section>
  );
}

export default Solutions;
