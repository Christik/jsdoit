import './footer.scss';

import classnames from 'classnames';

function Footer({ className }) {
  return (
    <footer className={classnames('jd-footer', className)}>
      <div className="jd-container">
        &copy; JSDOIT.ru 2022
      </div>
    </footer>
  );
}

export default Footer;
