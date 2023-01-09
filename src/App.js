import Footer from './components/Footer';
import Header from './components/Header';
import Multiply from './components/Multiply';

function App() {
  return (
    <div>
      <Header />
      <Multiply headerName='My multiply app' backgroundColor='coral' />
      <Multiply headerName='another app' backgroundColor='green' />
      <Multiply headerName='and another one' backgroundColor='red' />
      <Footer />
    </div>
  );
}

export default App;
