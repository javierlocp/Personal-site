import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

/*
  MainLayout is the default layout for this site.
  If you're looking to customize a layout, you can add it in ./src/layouts/CustomLayout.jsx
*/

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;