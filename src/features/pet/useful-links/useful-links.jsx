import { useState, useEffect } from 'react';

import { LinkList, Loader, Error } from 'features/ui';
import { getUsefulLinks } from 'store';

const LinkIcon = {
  video: 'youtube',
  article: 'file-text',
};

function UsefulLinks(props) {
  const { className, ids } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [links, setLinks] = useState(null);

  const isContentReady = !(isLoading || isError);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const data = await getUsefulLinks(ids[0]);

        const adaptedLinks = data
          .filter(({ id }) => ids.includes(id))
          .map(({ type, ...rest }) => ({
            ...rest,
            icon: LinkIcon[type],
          }));

        setLinks(adaptedLinks);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    getLinks();
  }, [ids]);

  return (
    <section className={className}>
      <h2 className="jd-text-title jd-text-title--s jd-spacer-bottom-l">
        Полезные ссылки
      </h2>

      { isLoading && <Loader /> }

      { isError && <Error /> }

      { isContentReady && <LinkList items={links} /> }
    </section>
  );
}

export default UsefulLinks;
