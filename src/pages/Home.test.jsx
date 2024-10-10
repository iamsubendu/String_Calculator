import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  it("renders input field", () => {
    render(<Home />);
    const inputField = screen.getByTestId("inputString");
    expect(inputField).toBeInTheDocument();
  });

  it("renders calculate button", () => {
    render(<Home />);
    const calculateButton = screen.getByText("Calculate");
    expect(calculateButton).toBeInTheDocument();
  });

  it("handles user input and performs calculation", () => {
    render(<Home />);

    const inputField = screen.getByTestId("inputString");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(inputField, { target: { value: "1,2,3" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 6");
    expect(result).toBeInTheDocument();
  });

  it("handles user input and performs calculation", () => {
    render(<Home />);

    const inputField = screen.getByTestId("inputString");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(inputField, { target: { value: "" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 0");
    expect(result).toBeInTheDocument();
  });

  it("handles user input and performs calculation", () => {
    render(<Home />);

    const inputField = screen.getByTestId("inputString");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(inputField, { target: { value: "1" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 1");
    expect(result).toBeInTheDocument();
  });

  it("handles user input and performs calculation", () => {
    render(<Home />);

    const inputField = screen.getByTestId("inputString");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(inputField, { target: { value: "1,5" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 6");
    expect(result).toBeInTheDocument();
  });

  it("handles user input and performs calculation", () => {
    render(<Home />);

    const inputField = screen.getByTestId("inputString");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(inputField, { target: { value: "//;\n1;2" } });
    fireEvent.click(calculateButton);

    const result = screen.getByText("Result: 3");
    expect(result).toBeInTheDocument();
  });
});
