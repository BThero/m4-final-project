import Carousel from './components/Carousel/Carousel';
import Mission from './components/Mission/Mission';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo/Demo';
import { GlobalStyled } from './styles/Global.styled';
import { Div } from './App.styled';

export default function App() : JSX.Element {
  return (
    <>
      <GlobalStyled />
      <Div>
        <Header />
        <main>
          <Carousel />
          <Mission />
          <Demo />
        </main>
        <Footer />
      </Div>
    </>
  );
}