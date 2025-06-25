import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

/*
  MainLayout is the default layout for this site.
  If you're looking to add custom layout, you can add it in ./src/layouts/CustomLayout.jsx
*/

const MainLayout = ({ children }) => {
  return (
    <>
      <div className = "container">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;