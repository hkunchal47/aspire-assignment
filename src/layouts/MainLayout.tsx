import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationLink } from '../components';
// Import logo
import aspireLogo from '../assets/aspire-logo.svg';
import '../styles/layout.scss';
import '../styles/app.scss';

const linksList = [
  { title: 'Home', icon: 'icon-Home', link: '#' },
  { title: 'Cards', icon: 'icon-Card', link: '#' },
  { title: 'Payments', icon: 'icon-Payments', link: '#' },
  { title: 'Credit', icon: 'icon-Credit', link: '#' },
  { title: 'Settings', icon: 'icon-Account', link: '#' },
];

function MainLayout() {
  const [leftDrawerOpen, _setLeftDrawerOpen] = useState(false);

  return (
    <div className="q-layout">
      <div className={`q-drawer ${leftDrawerOpen ? 'open' : ''}`}>
        <div className="q-drawer__header">
          <div className="q-drawer__header-logo">
            <img src={aspireLogo} alt="Aspire" style={{ maxWidth: '125px' }} />
          </div>
          <div className="q-drawer__header-label">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </div>
        <div className="q-drawer__content">
          {linksList.map((link) => (
            <NavigationLink key={link.title} {...link} />
          ))}
        </div>
      </div>
      <div className="q-page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

