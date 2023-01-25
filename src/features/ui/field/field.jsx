import './field.scss';

import classnames from 'classnames';

import { Icon, IconSize } from 'features/ui';
import { useState, useEffect, useDeferredValue } from 'react';

function Field(props) {
  const {
    className, icon, placeholder = '', value, onChange,
  } = props;
  const [text, setText] = useState(value);
  const deferredValue = useDeferredValue(text);

  const onInputChange = (evt) => {
    setText(evt.target.value);
  };

  useEffect(() => {
    onChange(deferredValue);
  }, [deferredValue]);

  return (
    <div className={classnames(
      'jd-field',
      { 'jd-field--has-icon-left': icon },
      className,
    )}
    >
      <input
        type="text"
        className="jd-field__input"
        placeholder={placeholder}
        value={text}
        onChange={onInputChange}
      />

      { icon && (
        <div className="jd-field__icon">
          <Icon icon={icon} size={IconSize.S} />
        </div>
      )}
    </div>
  );
}

export default Field;
