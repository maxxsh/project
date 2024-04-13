import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { FormProvider } from "../context/formContext";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";

// Mock availableTimes data for testing
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const mockUpdateTimes = jest.fn();

describe("BookingForm component", () => {
  test("Renders the BookingForm heading", () => {
    render(
      <Router>
        <FormProvider>
          <BookingForm availableTimes={availableTimes} />
        </FormProvider>
      </Router>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders the BookingForm button", () => {
    render(
      <Router>
        <FormProvider>
          <BookingForm availableTimes={availableTimes} />
        </FormProvider>
      </Router>
    );
    const headingElement = screen.getByText("Choose time");
    expect(headingElement).toBeInTheDocument();
  });

  test("Submitting the form with valid inputs", () => {
    // Render the BookingForm component
    render(
      <Router>
        <FormProvider>
          <BookingForm
            availableTimes={availableTimes}
            updateTimes={mockUpdateTimes}
          />
        </FormProvider>
      </Router>
    );

    // Fill in form inputs and submit the form within act(...)
    act(() => {
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
    });

    // Assertions
    expect(screen.getByLabelText("Choose date").value).toBe("2024-04-11");
    // expect(screen.getByLabelText("Number of guests").value).toBe("4");
    expect(screen.getByLabelText("Occasion").value).toBe("Birthday");
  });

  test("Valid guests input", async () => {
    render(
      <Router>
        <FormProvider>
          <BookingForm availableTimes={availableTimes} />
        </FormProvider>
      </Router>
    );

    // Get the guests input field
    const guestsInput = screen.getByLabelText("Number of guests");
    act(() => {
      // Enter a valid value
      fireEvent.change(guestsInput, { target: { value: "4" } });
    });
    // Assert the value is updated
    expect(guestsInput.value).toBe("4");
  });

  test("Submitting the form with invalid guests input", async () => {
    render(
      <Router>
        <FormProvider>
          <BookingForm availableTimes={availableTimes} />
        </FormProvider>
      </Router>
    );

    act(() => {
      fireEvent.cl;
      // Fill in invalid form inputs
      fireEvent.change(screen.getByLabelText("Number of guests"), {
        target: { value: "0" }, // Empty date
      });

      // Submit the form
      fireEvent.click(screen.getByText("Make Your reservation"));
    });

    // Assert submission results
    await screen.findByLabelText(
      "Number of guests Value must be greater than 0"
    );
  });

  test("Submitting the form with invalid date", async () => {
    render(
      <Router>
        <FormProvider>
          <BookingForm
            availableTimes={availableTimes}
            updateTimes={mockUpdateTimes}
          />
        </FormProvider>
      </Router>
    );
    act(() => {
      fireEvent.cl;
      // Fill in invalid form inputs
      fireEvent.change(screen.getByLabelText("Choose date"), {
        target: { value: "" }, // Empty date
      });

      // Submit the form
      fireEvent.click(screen.getByText("Make Your reservation"));
    });
    // Assert submission results
    await screen.findByLabelText("Choose date Required");
  });

  test("Submitting the form with valid inputs calls onSubmit prop with true", async () => {
    // Mock handleSubmit function
    const handleSubmit = jest.fn();

    render(
      <Router>
        <FormProvider>
          <BookingForm
            availableTimes={availableTimes}
            updateTimes={mockUpdateTimes}
            onTestSubmit={handleSubmit}
          />
        </FormProvider>
      </Router>
    );
    act(() => {
      // Fill in valid form inputs
      fireEvent.change(screen.getByLabelText("Your name"), {
        target: { value: "Vasa" },
      });
      fireEvent.change(screen.getByLabelText("Your email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(screen.getByLabelText("Choose date"), {
        target: { value: "2024-10-11" },
      });
      fireEvent.change(screen.getByLabelText("Number of guests"), {
        target: { value: "4" },
      });
      fireEvent.change(screen.getByLabelText("Occasion"), {
        target: { value: "Birthday" },
      });
      // Submit the form
      fireEvent.click(screen.getByText("Make Your reservation"));
    });
    // Wait for handleSubmit
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        date: "2024-10-11",
        email: "test@test.com",
        guests: 4,
        name: "Vasa",
        occasion: "Birthday",
        time: availableTimes[0],
      });
    });
  });
});
