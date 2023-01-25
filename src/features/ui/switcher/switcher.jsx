import './switcher.scss';

import { useEffect, useState, useId } from 'react';
import classnames from 'classnames';

function Switcher(props) {
  const {
    className, label, checked = false, onChange,
  } = props;

  const id = useId();
  const [isChecked, setIsChecked] = useState(checked);

  const onCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const onCheckboxKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      setIsChecked((prevIsChecked) => !prevIsChecked);
    }
  };

  useEffect(() => onChange(isChecked), [isChecked]);

  useEffect(() => setIsChecked(checked), [checked]);

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
          checked={isChecked}
          onChange={onCheckboxChange}
          onKeyDown={onCheckboxKeyDown}
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
