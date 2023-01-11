import './checkbox.scss';

import classnames from 'classnames';

function Checkbox(props) {
  const {
    className, value, label, checked, onChange,
  } = props;

  return (
    <label
      className={classnames('jd-checkbox', className)}
      htmlFor={`check-${value}`}
    >
      <input
        className="jd-checkbox__input"
        type="checkbox"
        id={`check-${value}`}
        value={value}
        checked={checked}
        onChange={({ target }) => onChange(target.value, target.checked)}
      />
      <span className="jd-checkbox__box" />
      <span className="jd-checkbox__text">{label}</span>
    </label>
  );
}

export default Checkbox;
