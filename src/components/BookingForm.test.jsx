import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock availableTimes data for testing
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

describe("BookingForm component", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders the BookingForm button", () => {
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Choose time");
    expect(headingElement).toBeInTheDocument();
  });

  test("Submitting the form with valid inputs", () => {
    // Render the BookingForm component
    render(<BookingForm availableTimes={availableTimes} />);

    // Fill in form inputs
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2024-04-11" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Make Your reservation"));

    // Assertions
    expect(screen.getByLabelText("Choose date").value).toBe("2024-04-11");
    expect(screen.getByLabelText("Number of guests").value).toBe("4");
    expect(screen.getByLabelText("Occasion").value).toBe("Birthday");
  });

  // Add more test cases for edge cases and validation if needed
});
