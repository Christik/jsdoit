import './pet-page.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPetBySlug } from 'store';

import { Loader, Error } from 'features/ui';
import {
  AboutPet,
  DownloadResources,
  Gallery,
  Specification,
  UsefulLinks,
} from 'features/pet';

function PetPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pet, setPet] = useState(null);

  const { slug } = useParams();

  const linksTableId = pet?.links ? pet?.links[0] : null;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getPetBySlug(slug);

        if (isMounted) {
          setPet(data);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, [slug]);

  useEffect(() => {
    if (pet !== null) {
      setIsLoading(false);
    }
  }, [pet]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="jd-container">
      <div className="jd-pet-layout jd-spacer-top-xl">
        <div className="jd-pet-layout__gallery">
          <Gallery url={pet.imgUrl} />
        </div>

        <AboutPet
          className="jd-pet-layout__about"
          pet={pet}
        />

        <div className="jd-pet-layout__main">
          <div className="jd-pet-layout__main__content">
            <Specification
              className="jd-spacer-bottom-2xl"
              content={pet.specification}
            />

            { linksTableId && <UsefulLinks id={linksTableId} /> }
          </div>

          <div className="jd-pet-layout__main__side">
            <div className="jd-pet-layout__main__side__sticky">
              <DownloadResources
                figmaUrl={pet.figmaUrl}
                markupUrl={pet.markupUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetPage;
