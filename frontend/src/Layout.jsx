import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
};

export default Layout;
