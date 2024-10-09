import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom
import Home from "./Home";

describe("Home component", () => {
  it("renders input field and calculate button", () => {
    render(<Home />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Calculate" })
    ).toBeInTheDocument();
  });

  it("calls add function with input value on calculate button click", () => {
    const addMock = jest.fn();
    render(<Home add={addMock} />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(inputField, { target: { value: "1,2,3" } });
    fireEvent.click(calculateButton);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(addMock).toHaveBeenCalledWith("1,2,3");
  });

  it("displays result when add function returns a value", () => {
    const addMock = jest.fn(() => 6);
    render(<Home add={addMock} />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(inputField, { target: { value: "1,2,3" } });
    fireEvent.click(calculateButton);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  it("displays error message when add function throws an error", () => {
    const addMock = jest.fn(() => {
      throw new Error("Negative numbers not allowed: -1");
    });
    render(<Home add={addMock} />);
    const inputField = screen.getByRole("textbox");
    const calculateButton = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(inputField, { target: { value: "-1,2,3" } });
    fireEvent.click(calculateButton);

    expect(
      screen.getByText("Error: Negative numbers not allowed: -1")
    ).toBeInTheDocument();
  });
});
