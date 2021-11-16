import React, { FC } from 'react';
import './AppLayout.scss';

interface AppLayoutProps {
  pageTitle: string;
}

const AppLayout: FC<AppLayoutProps> = ({ pageTitle, children }) => (
  <main className="main">
    <h1 className="page-title"> {pageTitle}</h1>
    {children}
  </main>
);

export default AppLayout;
