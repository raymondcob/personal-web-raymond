import { BrowserRouter } from "react-router-dom";
import herobg from "./assets/herobg.png";
import { About, Contact, Hero, Navbar, Tech, Works } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <div className="space-y-0">
          <About />
          <Tech />
          <Works />
          <div className="relative z-0 ">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
