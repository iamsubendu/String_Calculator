import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  it("renders navbar element", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders NavLink element", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navLinkElement = screen.getByRole("link");
    expect(navLinkElement).toBeInTheDocument();
  });

  it("renders correct text in NavLink", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navLinkElement = screen.getByText("String Calculator TDD Kata");
    expect(navLinkElement).toBeInTheDocument();
  });

  it("renders NavLink with correct className", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navLinkElement = screen.getByText("String Calculator TDD Kata");
    expect(navLinkElement).toHaveClass("fs-2 fw-bold");
  });

  it("renders NavLink with correct href", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const navLinkElement = screen.getByText("String Calculator TDD Kata");
    expect(navLinkElement).toHaveAttribute("href", "/");
  });
});
