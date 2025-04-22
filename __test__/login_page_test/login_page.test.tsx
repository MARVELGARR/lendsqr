import { screen, render } from "@testing-library/react";
import LoginPage from "../../app/(routes)/(authRoutes)/login/page";


describe("LoginPage", ()=>{
    it("renders the login page correctly", () => {
        const { getByText, getByAltText } = render(<LoginPage />);
        
        expect(getByText("Welcome!")).toBeInTheDocument();
        expect(getByText("Enter details to login.")).toBeInTheDocument();
        expect(getByAltText("Lendsqr Logo")).toBeInTheDocument();
        expect(getByAltText("Login Illustration")).toBeInTheDocument();
    });

    it("checks if the loginForm is present in the login page", () => {
        render(<LoginPage />);

        const loginForm = screen.getByTestId("login-form");
        expect(loginForm).toBeInTheDocument();
    })
})