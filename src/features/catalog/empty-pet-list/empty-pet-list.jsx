import './empty-pet-list.scss';

function EmptyPetList() {
  return (
    <div className="jd-empty-pet-list">
      <div className="jd-container">
        <div className="jd-empty-pet-list__title jd-text-title jd-text-title--h2">
          ¯\_(ツ)_/¯
        </div>
        <p className="jd-text-body">
          Упс... По данному запросу ничего не найдено.
        </p>
      </div>
    </div>
  );
}

export default EmptyPetList;
