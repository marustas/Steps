import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  /* React is IMMUTABLE, so update values, use designated functions for it
Instead of step = step +1, do [step, setStep] = useState(n) setStep(step + 1)
  */
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step >= 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step <= 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: "#7950f2", color: "white" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: "#7950f2", color: "white" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
