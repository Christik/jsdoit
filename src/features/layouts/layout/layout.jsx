import './layout.scss';

import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'features/layouts';

function Layout() {
  return (
    <section className="jd-layout">
      <Header className="jd-layout__header" />

      <main className="jd-layout__content">
        <Outlet />
      </main>

      <Footer className="jd-layout__footer" />
    </section>
  );
}

export default Layout;
