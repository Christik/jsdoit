import './checkbox.scss';

import { useEffect, useState } from 'react';
import classnames from 'classnames';

function Checkbox(props) {
  const {
    className, value, label, checked = false, onChange,
  } = props;

  const [isChecked, setIsChecked] = useState();

  const onCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const onCheckboxKeydown = (evt) => {
    if (evt.key === 'Enter') {
      setIsChecked((prevIsChecked) => !prevIsChecked);
    }
  };

  useEffect(
    () => onChange(value, isChecked),
    [isChecked, value],
  );

  useEffect(() => setIsChecked(checked), [checked]);

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
