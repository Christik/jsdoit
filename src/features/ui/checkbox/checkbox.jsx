import './checkbox.scss';

import { useEffect, useState } from 'react';
import classnames from 'classnames';

function Checkbox(props) {
  const {
    className, value, label, checked = false, onChange,
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const onCheckboxChange = ({ target }) => {
    setIsChecked(target.checked);
    onChange(target.value, target.checked);
  };

  const onCheckboxKeydown = (evt) => {
    if (evt.key === 'Enter') {
      onChange(evt.target.value, !evt.target.checked);
      setIsChecked((prevIsChecked) => !prevIsChecked);
    }
  };

  useEffect(() => onChange(value, isChecked), []);

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
        checked={isChecked}
        onChange={onCheckboxChange}
        onKeyDown={onCheckboxKeydown}
      />
      <span className="jd-checkbox__box" />
      <span className="jd-checkbox__text">{label}</span>
    </label>
  );
}

export default Checkbox;
