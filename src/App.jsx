import FrequentlyAsked from "./component/FrequentlyAsked";
import Nav from "./component/Nav";
import Reasons from "./component/Reasons";
import Trends from "./component/Trends";
import Footer from "./component/Footer";
import Subscription from "./component/Singerup";
//import './App.css'

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-black">
        <div className="min-h-screen px-12 text-white scroll-smooth max-w-320">
          <Nav />
          <Trends />
          <Reasons />
          <FrequentlyAsked />
          <Subscription />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
