/* eslint-disable no-lone-blocks */
import React from "react";
import "./style.css";
function Header({ state }) {
  return (
    <>
      {state && (
        <header>
          <div className="logo">exhange</div>
          <div className="rate">
            <div className="eu">
              <span>
                <b>EU</b>
              </span>
              <span>BUY: {state[1].rateBuy} UAH</span>
              <span>SELL: {state[1].rateSell} UAH</span>
            </div>
            <div className="usd">
              <span>
                <b>USD</b>
              </span>
              <span>BUY: {state[0].rateBuy} UAH</span>
              <span>SELL: {state[0].rateSell} UAH</span>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
