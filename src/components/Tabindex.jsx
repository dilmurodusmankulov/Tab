import { useState } from "react";
import "../components/Tabindex.css";

const TabIndex = () => {
  const [contName, setContName] = useState("Positive");
  const TabClick = (tabName) => {
    setContName(tabName);
  };

  const Input = (e) => {
    e.preventDefault();
    const tabIndex = parseInt(e.target.children[0].value);

    switch (tabIndex) {
      case 1:
        setContName("Positive");
        break;
      case 2:
        setContName("Negative");
        break;
      case 3:
        setContName("Neutral");
        break;
      default:
        setShowModal(false);
        break;
    }
  };

  return (
    <div className="container">
      <div className="tab__section">
        <form
          onSubmit={Input}
          className="form__section "
          placeholder="Enter tab index"
        >
          <input
            name="tabIndex"
            type="number"
            placeholder="Enter tab index"
            className="form__section__input"
          />
          <button type="submit" className="section__button">
            Change tab
          </button>
        </form>
        <div className="section__title">
          <span
            onClick={() => TabClick("Positive")}
            className={`span ${contName === "Positive" ? "active" : ""}`}
          >
            POSITIVE
          </span>
          <span
            onClick={() => TabClick("Negative")}
            className={`span ${contName === "Negative" ? "active" : ""}`}
          >
            NEGATIVE
          </span>
          <span
            onClick={() => TabClick("Neutral")}
            className={`span ${contName === "Neutral" ? "active" : ""}`}
          >
            NEUTRAL
          </span>
        </div>
        <p>{contName} content</p>
      </div>
    </div>
  );
};
export default TabIndex;
