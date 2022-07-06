import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BookGrid from './BookGrid';

import Catch22Cover from './../../assets/images/covers/catch-22.webp';
import UlyssesCover from './../../assets/images/covers/ulysses.webp';
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../../services/context/CartContext";

const booksToDisplay = [
    {
        id: "1",
        title: "Catch-22",
        author: "Joseph Heller",
        price: 8.99,
        imageURL: Catch22Cover
    },
    {
        id: "2",
        title: "Ulysses",
        author: "James Joyce",
        price: 9.99,
        imageURL: UlyssesCover
    },
]

describe("Testing BookGrid Component", () => {

    it('renders correct amount of books', () => {
        

        render(
            <BrowserRouter>
                <BookGrid  books={booksToDisplay} isCart={false}/>
            </BrowserRouter>
        );

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getAllByRole('article').length).toEqual(2);
    });

    it('renders correct amount of books, cart', () => {
        render(
            <CartContext.Provider value={{changeItemQuantity: jest.fn(), removeCartItem: jest.fn()}}>
                <BookGrid books={booksToDisplay} isCart={true} />
            </CartContext.Provider>
        );

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getAllByRole('article').length).toEqual(2);
    })
})

