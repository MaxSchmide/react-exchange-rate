/* eslint-disable eqeqeq */
import React, { useRef } from "react";
import "./style.css";

function Main({ state }) {
  const primInputRef = useRef();
  const secInputRef = useRef();
  const primSelectRef = useRef();
  const secSelectRef = useRef();

  const inputHandler = (e) => {
    e.preventDefault();
    state.map((item) =>
      primSelectRef.current.value == item.currencyCodeA &&
      secSelectRef.current.value == item.currencyCodeB
        ? e.target.name == primInputRef.current.name
          ? (secInputRef.current.value =
              primInputRef.current.value * item.rateBuy)
          : (primInputRef.current.value =
              secInputRef.current.value / item.rateBuy)
        : secSelectRef.current.value == item.currencyCodeA &&
          primSelectRef.current.value == item.currencyCodeB
        ? e.target.name == primInputRef.current.name
          ? (secInputRef.current.value =
              primInputRef.current.value / item.rateBuy)
          : (primInputRef.current.value =
              secInputRef.current.value * item.rateBuy)
        : ""
    );
  };
  const selectHandler = (e) => {
    e.preventDefault();
    state.map((item) =>
      primSelectRef.current.value == item.currencyCodeA &&
      secSelectRef.current.value == item.currencyCodeB
        ? e.target.name == primInputRef.current.name
          ? (primInputRef.current.value =
              secInputRef.current.value / item.rateBuy)
          : (secInputRef.current.value =
              primInputRef.current.value * item.rateBuy)
        : secSelectRef.current.value == item.currencyCodeA &&
          primSelectRef.current.value == item.currencyCodeB
        ? e.target.name == primInputRef.current.name
          ? (primInputRef.current.value =
              secInputRef.current.value * item.rateBuy)
          : (secInputRef.current.value =
              primInputRef.current.value / item.rateBuy)
        : ""
    );
  };
  return (
    <div className="container">
      <section>
        <form>
          <span>
            <input
              onChange={inputHandler}
              ref={primInputRef}
              type="number"
              name="primary"
            />
            <label htmlFor="primary">
              <select
                onChange={selectHandler}
                name="primary"
                ref={primSelectRef}
                defaultValue={"840"}
              >
                <option value="978">EU</option>
                <option value="840">USD</option>
                <option value="980">UA</option>
              </select>
            </label>
          </span>

          <span>
            <input
              onChange={inputHandler}
              ref={secInputRef}
              type="number"
              name="secondary"
            />
            <label htmlFor="secondary">
              <select
                onChange={selectHandler}
                name="secondary"
                ref={secSelectRef}
                defaultValue={"980"}
              >
                <option value="980">UA</option>
                <option value="840">USD</option>
                <option value="978">EU</option>
              </select>
            </label>
          </span>
        </form>
      </section>
    </div>
  );
}

export default Main;
