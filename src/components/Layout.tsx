import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9' }}>
      {children}
    </div>
  );
};

export default Layout;
