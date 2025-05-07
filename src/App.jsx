import Header from '../components/header';
import Footer from '../components/footer';
import './styles.css';
import Main from '../components/main';
import infoData from '../components/data';

export default function App() {
  return (
    <>
      <Header />
      <Main infoData={infoData} />
      <Footer />
    </>
  );
}
