// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import SearchDataProvider from "../../contexts/SearchDataProvider";
import DarkModeProvider from "../../contexts/DarkModeProvider";
import "@testing-library/jest-dom";

// 👇 Mock the API
jest.mock("src/apis/searchApi", () => ({
  searchContent: jest.fn(() =>
    Promise.resolve({ status: "success", data: [] })
  ),
}));

// 👇 Mock Toast
jest.mock("react-toastify", () => ({
  toast: {
    info: jest.fn(),
  },
}));

// 👇 Mock FontAwesome
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: (props: { icon: { iconName: string } }) => (
    <i>{props.icon.iconName}</i>
  ),
}));

// 👇 Mock UI Components
jest.mock("src/ui", () => ({
  AutocompleteModal: () => <div data-testid="autocomplete-modal" />,
  ProfileDropdown: () => <div data-testid="profile-dropdown" />,
  ResponsiveMenu: () => <div data-testid="responsive-menu" />,
}));

describe("Navbar Component", () => {
  const handleMenu = jest.fn();

  const setup = () => {
    render(
      <MemoryRouter initialEntries={["/feed"]}>
        <DarkModeProvider>
          <SearchDataProvider>
            <Navbar handleMenu={handleMenu} menu={false} />
          </SearchDataProvider>
        </DarkModeProvider>
      </MemoryRouter>
    );
  };

  it("renders logo image and input field", () => {
    setup();
    const logo = screen.getByAltText(/LinedIn_logo/i);
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("calls handleMenu when ellipsis icon is clicked (mobile menu)", () => {
    setup();
    const ellipsisBtn = screen.getByTestId("ellipsis-button");
    fireEvent.click(ellipsisBtn);
    expect(handleMenu).toHaveBeenCalled();
  });

  it("updates input value when typing", () => {
    setup();
    const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "developer" } });
    expect(input.value).toBe("developer");
  });

  it("renders nav items correctly", () => {
    setup();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Network")).toBeInTheDocument();
    expect(screen.getByText("Jobs")).toBeInTheDocument();
    expect(screen.getByText("Messaging")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Advertise")).toBeInTheDocument();
  });

  it("shows AutocompleteModal when search button is clicked", () => {
    setup();
    const searchBtn = screen.getByTestId("search-button");
    fireEvent.click(searchBtn);
    expect(screen.getByTestId("autocomplete-modal")).toBeInTheDocument();
  });

  it("renders profile dropdown and responsive menu", () => {
    setup();
    expect(screen.getByTestId("profile-dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("responsive-menu")).toBeInTheDocument();
  });
});
