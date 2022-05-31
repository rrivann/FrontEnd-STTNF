import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Container from '../Components/Container/index';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
