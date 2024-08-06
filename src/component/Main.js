import React,{useEffect, useState} from 'react'
import Home from './useable/Home';
import About from './useable/About';
import Service from './useable/Service';
import Portfolio from './useable/Portfolio';
import News from './useable/News';
import Contact from './useable/Contact';
export default function Main() {
    const [count , setcount] = useState(0);
  return (
    <div className='main-app'>
            <div className='side-nav'>
                <div className='main-logo'>Logo</div>
                <div className='main-menu'>
                <ul>
                   <li className={count === 0 && ("load")}
                   onClick={()=>{setcount(0);
                    document.title="M-Arbaz || Home"
                   }}
                   >HOME</li>
                    <li className={count === 1 && ("load")}
                    onClick={()=>{setcount(1);
                        document.title="M-Arbaz || About"}}
                    >ABOUT</li>
                    <li className={count === 2 && ("load")}
                    onClick={()=>{setcount(2);
                        document.title="M-Arbaz || Services"}}
                    >SERVICES</li>
                    <li className={count === 3 && ("load")}
                    onClick={()=>{setcount(3);
                        document.title="M-Arbaz || Portfolio"}}
                    >PORTFOLIO</li>
                    <li className={count === 4 && ("load")}
                    onClick={()=>{setcount(4);
                        document.title="M-Arbaz || News"}}
                    >NEWS</li>
                    <li  className={count === 5 && ("load")}
                    onClick={()=>{setcount(5);
                        document.title="M-Arbaz || Contact"}}
                    >CONTACT</li>
                </ul>
                
                </div>
                <div className='main-footer'>
                    <p>
                    © 2024 Kumail <br/>
                    Created by M-Arbaz
                    </p>
                    </div>
                
            </div>
            <div className='main-render'>
              {count === 0 && (  <Home/>)}
              {count === 1 && (  <About/>)}
              {count === 2 && (  <Service/>)}
              {count === 3 && (  <Portfolio/>)}
              {count === 4 && (  <News/>)}
              {count === 5 && (  <Contact/>)}

            </div>

    </div>
  )
}
