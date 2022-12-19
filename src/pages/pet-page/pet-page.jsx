import './pet-page.scss';

import {
  AboutPet,
  DownloadResources,
  Gallery,
  Specification,
} from 'features/pet';

function PetPage() {
  return (
    <div className="jd-container">
      <div className="jd-pet-layout jd-spacer-top-xl">
        <div className="jd-pet-layout__gallery">
          <Gallery />
        </div>

        <AboutPet className="jd-pet-layout__about" />

        <div className="jd-pet-layout__main">
          <div className="jd-pet-layout__main__content">
            <Specification />
          </div>

          <div className="jd-pet-layout__main__side">
            <div className="jd-pet-layout__main__side__sticky">
              <DownloadResources />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetPage;
