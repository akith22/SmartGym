import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
