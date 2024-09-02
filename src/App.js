import './App.css';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { ImEmbed } from "react-icons/im";
import { FaMusic } from "react-icons/fa6";
import { PiSmileyWinkBold } from "react-icons/pi";
import { IoMdLaptop } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <header className="header">
        <span className='logo'><FaYoutube /></span>
        
        <input type="text" placeholder="Search..." className="search-bar" />
        <span className='mike'><MdKeyboardVoice /></span>
        <div className='head'>
        <span className='plus'><FaPlus /> Create</span>
        <span className='bellicon'><FaBell /></span>
        <span className='profile'><FaProductHunt /></span>
        </div>
      </header>
      <div className="content">
        <div className="card-container">
          
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/emwAfCOog-s?si=nMxGtLvnRLhTee9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Learn ReactJs</h4>
              <p>Tutor Joe"s Stanley</p>
              <p className='view'>47K Views</p>
            </div>
          </div>
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/gPpQNzQP6gE?si=vtm87oVkwBBKT_jn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Akshath-Nadaaniyan (official Video)</h4>
              <p>Akshath Acharya</p>
              <p className='view'>6.6M Views</p>
            </div>
          </div>
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/kPhpHvnnn0Q?si=-vC5PhyD2zgpwPrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Ed-Sheeran -Perfect</h4>
              <p>7 Clouds</p>
              <p className='view'>67M Views</p>
            </div>
          </div>
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/SysW3aD9B7M?si=CVPiYFvOZwMpK0Lz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Shinchan New Episodes</h4>
              <p>Shinchan World</p>
              <p className='view'>47K Views</p>
            </div>
          </div>
         
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/PR9iBc-ChcA?si=0BrSFyBLNfR58yC3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Kohli's First Test Century in England|Edgbaston 2018|England Cricket</h4>
              <p>England Wales Cricket Board</p>
              <p className='view'>13M Views</p>
            </div>
          </div>
          <div className="card">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/1m4NDlOAzyg?si=sY4g3s9f8VfHvJYq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="card-content">
              <h4>Improve Your English</h4>
              <p>English Academy</p>
              <p className='view'>27K Views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
            <a href="#" className="nav-link border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home">
              <IoMdMenu className='icon' />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home">
              <IoMdHome className='icon' />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard">
              <SiYoutubeshorts className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Music">
              <MdSubscriptions className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Embed">
              <ImEmbed className='icon'/>
            </a>
          </li>
          <hr className='line'/>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Music">
              <FaMusic className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Smiley">
              <PiSmileyWinkBold className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Laptop">
              <IoMdLaptop className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Sports">
              <MdSportsCricket className='icon'/>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="History">
              <FaHistory className='icon'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
