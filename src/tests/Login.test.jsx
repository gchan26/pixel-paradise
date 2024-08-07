/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";

// Mock Auth context and useNavigate
jest.mock("../contexts/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../assets/crt.jpeg", () => "mocked-image");
jest.mock("../assets/logos/smallLogo.svg", () => "mocked-image");
jest.mock("../assets/logos/Google.png", () => "mocked-image");

describe("Login component", () => {
  let mockLogin;
  let mockLoginWithGoogle;
  let mockNavigate;

  beforeEach(() => {
    mockLogin = jest.fn();
    mockLoginWithGoogle = jest.fn();
    mockNavigate = jest.fn();

    const useAuthMock = jest.requireMock("../contexts/AuthContext").useAuth;
    useAuthMock.mockReturnValue({
      login: mockLogin,
      loginWithGoogle: mockLoginWithGoogle,
    });

    const useNavigateMock = jest.requireMock("react-router-dom").useNavigate;
    useNavigateMock.mockReturnValue(mockNavigate);

    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should call loginWithGoogle function on Google button click", async () => {
    render(<Login setLoginSuccess={jest.fn()} />);

    const googleButton = screen.getByRole("button", {
      name: /Log in with Google/i,
    });
    userEvent.click(googleButton);

    await waitFor(() => {
      expect(mockLoginWithGoogle).toHaveBeenCalled();
    });
  });

  it("should call login function with correct credentials on submit", async () => {
    render(<Login setLoginSuccess={jest.fn()} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    userEvent.click(emailInput);
    await userEvent.type(emailInput, "test@mail.com");

    userEvent.click(passwordInput);
    await userEvent.type(passwordInput, "123123");

    await waitFor(() => {
      expect(emailInput.value).toBe("test@mail.com");
      expect(passwordInput.value).toBe("123123");
    });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@mail.com", "123123");
    });
  });

  it("should show error message on failed login", async () => {
    mockLogin.mockRejectedValue(new Error("Failed to log in"));

    render(<Login setLoginSuccess={jest.fn()} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    userEvent.click(emailInput);
    await userEvent.type(emailInput, "test@mail.com");
    userEvent.click(passwordInput);
    await userEvent.type(passwordInput, "123123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
    });
  });

  it("should navigate to home page on successful login", async () => {
    render(<Login setLoginSuccess={jest.fn()} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    userEvent.click(emailInput);
    await userEvent.type(emailInput, "test@mail.com");
    userEvent.click(passwordInput);
    await userEvent.type(passwordInput, "123123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@mail.com", "123123");
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  it("should set login success state after successful login", async () => {
    const setLoginSuccessMock = jest.fn();
    render(<Login setLoginSuccess={setLoginSuccessMock} />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    userEvent.click(emailInput);
    await userEvent.type(emailInput, "test@mail.com");
    userEvent.click(passwordInput);
    await userEvent.type(passwordInput, "123123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith("test@mail.com", "123123");
    });

    await waitFor(() => {
      expect(setLoginSuccessMock).toHaveBeenCalledWith(true);
    });
  });
});
