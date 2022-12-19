function DownloadResources() {
  return (
    <>
      <a
        className="jd-button jd-button--block jd-spacer-bottom-s"
        href="#figma"
      >
        Скачать макет figma
        <span className="jd-icon jd-icon--figma jd-button__icon" />
      </a>

      <a
        className="jd-button jd-button--block"
        href="#markup"
      >
        Скачать верстку
        <span className="jd-icon jd-icon--code jd-button__icon" />
      </a>
    </>
  );
}

export default DownloadResources;
