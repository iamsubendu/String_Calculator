import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (numbers) => {
    if (!numbers) return 0;

    const delimiter = /[;:,|/\n]/; // Regular expression to match any delimiter
    if (numbers.startsWith("//")) {
      numbers = numbers.substring(2); // Remove custom delimiter specifier
    }
    if (numbers.includes("\\n")) {
      numbers = numbers.replace("\\n", "\n"); // Handle new lines properly
    }

    const numberArray = numbers.split(delimiter); // Split by delimiter
    const negatives = [];

    const total = numberArray.reduce((sum, num) => {
      const value = parseInt(num, 10);
      if (isNaN(value) || num === "") return sum;
      if (value < 0) negatives.push(value);
      return sum + value;
    }, 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return total;
  };

  const handleCalculate = () => {
    try {
      setError(null);
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="home">
      <div className="container py-3 d-flex flex-column justify-content-center align-items-center gap-4">
        <p className="text-info">
          You can only use special characters as :<b>;:,|/</b>
        </p>
        <input
          type="text"
          placeholder="Enter numbers"
          value={input}
          className="ps-1"
          data-testid="inputString"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-sm btn-info" onClick={handleCalculate}>
          Calculate
        </button>
        {result !== null && (
          <p data-testid="success" className="text-success text-bold">
            Result: {result}
          </p>
        )}
        {error && (
          <p data-testid="error" className="text-danger text-bold">
            Error: {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
