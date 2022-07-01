import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from "./Header";

describe("Header component", () => {
    it.only("renders header text and menu image", () => {
        render(<Header />);

        const header = screen.getByRole("heading");
        const menuImg = screen.getByAltText("menu");
        const bagImg = screen.getByAltText("bag");

        expect(header.textContent).toMatch(/New Leaf Books/i);
        expect(menuImg).toHaveAttribute('src', 'menu.svg');
        expect(bagImg).toHaveAttribute('src', 'shopping_bag.svg');
    })
});