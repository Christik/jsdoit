function DownloadResources(props) {
  const { figmaUrl, markupUrl } = props;

  return (
    <>
      {figmaUrl && (
        <a
          className="jd-button jd-button--block jd-spacer-bottom-s"
          href={figmaUrl}
          target="_blank"
          rel="noreferrer"
        >
          Скачать макет figma
          <span className="jd-icon jd-icon--figma jd-button__icon" />
        </a>
      )}

      {markupUrl && (
        <a
          className="jd-button jd-button--block"
          href={markupUrl}
          target="_blank"
          rel="noreferrer"
        >
          Скачать верстку
          <span className="jd-icon jd-icon--code jd-button__icon" />
        </a>
      )}
    </>
  );
}

export default DownloadResources;
