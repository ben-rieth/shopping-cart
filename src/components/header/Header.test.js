import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from "./Header";

describe("Header component", () => {
    it("renders header text and menu image", () => {
        render(<Header />);

        const header = screen.getByRole("heading");
        const menuImg = screen.getByAltText("menu");
        const bagImg = screen.getByAltText("bag");

        expect(header.textContent).toMatch(/New Leaf Books/i);
        expect(menuImg).toHaveAttribute('src', 'menu.svg');
        expect(bagImg).toHaveAttribute('src', 'shopping_bag.svg');
    });

    it("opens sidebar when menu button is pressed", () => {
        render(<Header />);

        const menuBtn = screen.getByAltText("menu");

        userEvent.click(menuBtn);

        expect(screen.getByText("Home")).toBeVisible();
        expect(screen.getByText("Browse")).toBeVisible();
        expect(screen.getByText("Contact")).toBeVisible();
    });
});