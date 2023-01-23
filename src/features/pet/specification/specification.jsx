function Specification(props) {
  const { className, content } = props;

  return (
    <section className={className}>
      <h2 className="jd-text-title jd-text-title--h2 jd-spacer-bottom-l">
        Техническое задание
      </h2>

      <div className="jd-text-body jd-text-color-secondary">
        {content}
      </div>
    </section>
  );
}

export default Specification;
