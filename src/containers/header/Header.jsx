import React from 'react';
import hero from '../../assets/hero.PNG';
import './header.css';
import { Image } from '../../components';

const Header = () => (
  <div className='naratext-text section__padding'>
    <div className="flex flex-col" style={{flexDirection: "column"}}>
      <div className="safety w-full sm:w-70 flex-col" style={{  display: "flex", justifyContent: "flex-end" }}>
        {/* <p>We’ve developed Integrity Management and Process Safety Management Plans to continually improve the safety of our pipeline systems and allocate resources effectively to accomplish each of the following:</p> */}
        <ul className="list-disc"> 
          <li className="mt-4 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
          <li className="mt-2 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
          <li className="mt-2 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
          <li className="mt-2 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
          <li className="mt-2 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
          <li className="mt-2 rounded-md" style={{color: "#888"}}>
            Lorem ipsum dolor sit amet consectetur. Dictum sed sagittis nunc venenatis dolor orci sed libero.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;











