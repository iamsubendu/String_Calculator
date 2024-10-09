import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (numbers) => {
    if (!numbers) return 0;

    const delimiter = /[;:,|/\n]/;
    if (numbers.startsWith("//")) {
      numbers = numbers.substring(2);
    }
    if (numbers.includes("\\n")) {
      numbers = numbers.replace("\\n", "\n");
    }
    const numberArray = numbers.split(delimiter);
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
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-sm btn-info" onClick={handleCalculate}>
          Calculate
        </button>
        {result !== null && (
          <p className="text-success text-bold">Result: {result}</p>
        )}
        {error && <p className="text-danger text-bold">Error: {error}</p>}
      </div>
    </div>
  );
};

export default Home;
