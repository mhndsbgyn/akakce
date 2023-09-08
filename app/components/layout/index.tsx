import * as React from 'react';
import Header from '../header/index';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto h-screen bg-gray-100'>
      <Header />
      <main className='mx-auto container mt-8'>{children}</main>
    </div>
  );
};

export default Layout;
