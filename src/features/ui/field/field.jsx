import './field.scss';

import classnames from 'classnames';

import { Icon, IconSize } from 'features/ui';

function Field(props) {
  const { className, icon, placeholder = '' } = props;

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
