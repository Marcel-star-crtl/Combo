import React from 'react';
import ulevus from '../../assets/u.PNG';
import ai from '../../assets/ai5.png';
import './creatives.css';

const Header = () => (
  <div className="gpt3__creative" id="home">
    <div className="gpt3__creative-image">
        <div className="gpt3__header-content">
            <div className="gpt3__header-content__input">
              <a href="https://us13.list-manage.com/survey?u=32936502f609396052c95c7e3&id=b94d0b474e&attribution=false">
                <button type="button" class=" hover:bg-red-600 text-white font-bold py-2 px-4 rounded" style={{background: "#DD330B !important"}}>Sign Up</button>
              </a>
            </div>
        </div>
        <div className="gpt3__creatives-links_div gpt3__creatives-links_div--contact" >
            <h4>CREATIVES <br/><br/> CONNECTS</h4>
            <p style={{textDecoration: "underline"}}> Bringing together <br/> Creatives <br/> and Community <br/> members</p>
        </div>
    </div>
  </div>
);

export default Header;








