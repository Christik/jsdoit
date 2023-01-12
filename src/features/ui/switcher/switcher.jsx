import './switcher.scss';

import classnames from 'classnames';

function Switcher(props) {
  const {
    className, id, label, checked, onChange,
  } = props;

  return (
    <label
      className={classnames('jd-switcher', className)}
      htmlFor={id}
    >
      <span className="jd-switcher__bar">
        <input
          className="jd-switcher__input"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={({ target }) => onChange(target.checked)}
        />
        <span className="jd-switcher__track" />
        <span className="jd-switcher__handle" />
      </span>

      { label && (
        <span className="jd-switcher__text">
          {label}
        </span>
      )}
    </label>
  );
}

export default Switcher;
