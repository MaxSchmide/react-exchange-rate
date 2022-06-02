/* eslint-disable no-lone-blocks */
import React from "react";
import "./style.css";
import usd from "../../images/usd.png";
import eu from "../../images/eu.png";
function Header({ state }) {
  return (
    <>
      <header>
        <div className="logo">exhange</div>
        {state && (
          <div className="rate">
            <div className="eu">
              <span className="image">
                <img src={eu} alt="usd" />
              </span>
              <span className="buy">
                <i>BUY:</i> {state[1].rateBuy} UAH
              </span>
              <span className="sell">
                <i>SELL:</i> {state[1].rateSell} UAH
              </span>
            </div>
            <div className="usd">
              <span className="image">
                <img src={usd} alt="usd" />
              </span>
              <span className="buy">
                <i>BUY:</i> {state[0].rateBuy} UAH
              </span>
              <span className="sell">
                <i>SELL:</i> {state[0].rateSell} UAH
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
