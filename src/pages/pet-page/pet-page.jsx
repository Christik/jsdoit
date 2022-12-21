import './pet-page.scss';

import { useEffect, useState } from 'react';

import { getPetBySlug } from 'store';

import {
  AboutPet,
  DownloadResources,
  Gallery,
  Specification,
} from 'features/pet';

const SLUG = 'viselica';

function PetPage() {
  const [pet, setPet] = useState(null);

  // TODO: перенести pet в глобальный state

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getPetBySlug(SLUG);

      if (isMounted) {
        setPet(data);
      }
    };

    fetchData();

    return () => { isMounted = false; };
  }, []);

  if (pet === null) {
    return (
      <div>Loading...</div>
    );
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
            <Specification content={pet.specification} />
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
