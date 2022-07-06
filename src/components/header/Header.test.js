import React from "react";
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from "./Header";
import{BrowserRouter} from 'react-router-dom';
import { CartContext } from "../../services/context/CartContext";

describe("Header component", () => {

    it("renders header text and menu image", () => {
        render(<CartContext.Provider value={{cart: []}}><BrowserRouter><Header /></BrowserRouter></CartContext.Provider>);

        const header = screen.getByRole("heading");
        const menuImg = screen.getByAltText("menu");
        const bagImg = screen.getByAltText("bag");

        expect(header.textContent).toMatch(/New Leaf Books/i);
        expect(menuImg).toHaveAttribute('src', 'menu.svg');
        expect(bagImg).toHaveAttribute('src', 'shopping_bag.svg');
    });

    it("opens sidebar when menu button is pressed", () => {
        render(
            <CartContext.Provider value={{cart: []}}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </CartContext.Provider>
        );

        const menuBtn = screen.getByAltText("menu");

        userEvent.click(menuBtn);

        expect(screen.getByRole('complementary')).toHaveClass('translate-x-0');
        expect(screen.getByAltText("close")).not.toHaveClass('hidden');
    });

    it("closes sidebar when close button is pressed", async () => {
        render(
            <CartContext.Provider value={{cart: []}}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </CartContext.Provider>
        );

        const sidebar = screen.getByRole('complementary');
        const closeBtn = screen.getByAltText('close');

        userEvent.click(closeBtn);

        expect(sidebar).toHaveClass('-translate-x-full');
        expect(closeBtn).toHaveClass('hidden');

    })
});