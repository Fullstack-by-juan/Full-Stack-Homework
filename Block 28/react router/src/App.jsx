import Navbar from "./Components/Navigation";
import MainContainer from "./Components/Container";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <>
      <div id="container">
        
      <Navbar />
      <h1 className="tittle">React Router</h1>
      <MainContainer />
      <Footer />
    </div>
    </>
  )
}

export default App
