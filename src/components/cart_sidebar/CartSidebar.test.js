import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartSidebar from './CartSidebar';
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../../services/context/CartContext";

import Catch22Cover from './../../assets/images/covers/catch-22.webp';
import UlyssesCover from './../../assets/images/covers/ulysses.webp';
import DonQuixoteCover from './../../assets/images/covers/don-quixote.webp';

describe('Testing CartSidebar Component', () => {
    const booksToDisplay = [
        {
            id: "1",
            title: "Catch-22",
            author: "Joseph Heller",
            price: 8.99,
            quantity: 1,
            imageURL: Catch22Cover
        },
        {
            id: "2",
            title: "Ulysses",
            author: "James Joyce",
            price: 9.99,
            quantity: 1,
            imageURL: UlyssesCover
        },
    ]

    it('renders correct amount of cart items and correct subtotal', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{cart: booksToDisplay}}>
                    <CartSidebar />
                </CartContext.Provider>
            </BrowserRouter>
        );

        const sidebar = screen.getByRole('complementary');
        const subtotal = screen.getByText('$18.98');
        const cartItems = screen.getAllByRole('article')

        expect(sidebar).toBeInTheDocument();
        expect(subtotal).toBeInTheDocument();
        expect(cartItems.length).toEqual(2);

    });

    it('renders correct subtotal when quantities are greater than 1', () => {
        booksToDisplay.push(
            {
                id: "3",
                title: "Don Quixote",
                author: "Miguel de Cervantes",
                price: 10.99,
                imageURL: DonQuixoteCover,
                quantity: 3
            }
        )

        render(
            <BrowserRouter>
                <CartContext.Provider value={{cart: booksToDisplay}}>
                    <CartSidebar />
                </CartContext.Provider>
            </BrowserRouter>
        );

        const subtotal = screen.getByText('$51.95');

        expect(subtotal).toBeInTheDocument();
    })

    it('does not render when cart is empty', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{cart: []}}>
                    <CartSidebar />
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
    })
})

