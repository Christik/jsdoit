import './checkbox.scss';

import { useEffect, useState, useId } from 'react';
import classnames from 'classnames';

function Checkbox(props) {
  const {
    className, value, label, checked = false, onChange,
  } = props;

  const id = useId();
  const [isChecked, setIsChecked] = useState();

  const onCheckboxChange = (evt) => {
    setIsChecked(evt.target.checked);
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
      htmlFor={id}
    >
      <input
        className="jd-checkbox__input"
        type="checkbox"
        id={id}
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
