import {BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Intro, Navbar,StarsCanvas, About,Work, Calendar,Registration,BuyTicketsSection} from './components'


const BUY = () => {


  let navigate = useNavigate();

    const goToRegistration = () => {
      navigate('/registration');
    };
  return (
    <div className="bg-[#915EFF] text-white py-12">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">Get Your Tickets Now!</h2>
          <p className="text-xl mb-6">Join us for an unforgettable experience at our upcoming event.</p>
        </div>
        <div className="flex justify-center">
          <button onClick={goToRegistration}  className="bg-white text-[#915EFF] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-boldColor uppercase font-bold mb-2">Festival</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Tickets</a></li>
            <li><a href="#" className="hover:text-gray-300">Lineup</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-boldColor uppercase font-bold mb-2">Help</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300">Safety</a></li>
            <li><a href="#" className="hover:text-gray-300">Accessibility</a></li>
            <li><a href="#" className="hover:text-gray-300">Press</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-boldColor uppercase font-bold mb-2">Social</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-300">Twitter/X</a></li>
            <li><a href="#" className="hover:text-gray-300">Reddit</a></li>
            <li><a href="#" className="hover:text-gray-300">Discord</a></li>
            <li><a href="#" className="hover:text-gray-300">TikTok</a></li>
            <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-boldColor uppercase font-bold mb-2">Subscribe</h5>
          <form action="#" method="POST">
            <div className="flex flex-col">
              <input type="email" placeholder="Email address" className="mb-2 px-4 py-2 rounded text-black"/>
              <button type="submit" className="bg-[#915EFF] hover:bg-[#8254e5] text-black py-2 rounded">Sign Up for Emails</button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; CosmoClaim. All rights reserved.</p>
          <p className="text-gray-400 text-sm">&copy; 3D planet by https://sketchfab.com/cmzw.</p>
          <p className="text-gray-400 text-sm">&copy; 3D pruple planet by https://sketchfab.com/grox777</p>
          <p className="text-gray-400 text-sm">&copy; 3D lava planet by https://sketchfab.com/jcises</p>
          <p className="text-gray-400 text-sm">&copy; 3D Mercury planet by https://sketchfab.com/SebastianSosnowski</p>


          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-gray-300 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-gray-300 mx-2">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="relative z-0 bg-primary ">
      {isDesktop && <StarsCanvas />}
            <Navbar/>
            <Intro/>
            
          
          <About/>
          <Work/>
          <Calendar/>
<BUY/>
<Footer/>
    </div>
  );
};



const WorkPage = () => {
  return (
    <div className="relative z-0 bg-primary ">

            <Navbar/>
            <BuyTicketsSection/>
            <Footer/>

    </div>
  );
};
const  App=() =>{

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<WorkPage />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
