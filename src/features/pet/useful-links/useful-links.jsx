import { useState } from 'react';

import { LinkList } from 'features/ui';

function UsefulLinks(props) {
  const { className } = props;

  const [links] = useState([
    {
      icon: 'file-text',
      title: 'Пример калькулятора',
      url: '#todo',
    },
    {
      icon: 'file-text',
      title: 'Очень полезная статья',
      url: '#todo',
    },
    {
      icon: 'youtube',
      title: 'Видео про что-то очень важное',
      url: '#todo',
    },
  ]);

  return (
    <section className={className}>
      <h2 className="jd-text-title jd-text-title--h2 jd-spacer-bottom-l">
        Полезные ссылки
      </h2>

      <LinkList items={links} />
    </section>
  );
}

export default UsefulLinks;
