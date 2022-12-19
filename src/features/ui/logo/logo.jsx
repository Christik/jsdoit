import './logo.scss';

import classnames from 'classnames';

function Logo({ className }) {
  return (
    <div className={classnames('jd-logo', className)}>
      <span className="jd-logo__js"><span>JS</span></span>
      do it
      <span className="jd-logo__dot">.</span>
    </div>
  );
}

export default Logo;
