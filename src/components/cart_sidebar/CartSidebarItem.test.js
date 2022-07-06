import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartSidebarItem from './CartSidebarItem';
import { BrowserRouter } from "react-router-dom";

import Catch22Cover from './../../assets/images/covers/catch-22.webp';

describe('Testing CartSidebarItem Component', () => {
    const bookToDisplay = {
        id: "1",
        title: "Catch-22",
        author: "Joseph Heller",
        price: 8.99,
        quantity: 3,
        imageURL: Catch22Cover
    };

    it('renders the correct image and correct quantity', () => {
        render(
            <BrowserRouter>
                <CartSidebarItem book={bookToDisplay} />
            </BrowserRouter>
        );

        const bookImg = screen.getByAltText('cover');
        const bookQuantity = screen.getByText('3');

        expect(bookImg).toHaveAttribute('src', 'catch-22.webp');
        expect(bookQuantity).toBeInTheDocument();
    });

    it('does not render quantity of item if only one is in the cart', () => {
        bookToDisplay.quantity = 1;

        render(
            <BrowserRouter>
                <CartSidebarItem book={bookToDisplay} />
            </BrowserRouter>
        );

        expect(screen.queryByText('1')).not.toBeInTheDocument();
    })
})