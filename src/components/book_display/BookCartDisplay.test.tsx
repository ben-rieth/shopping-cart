import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BookCartDisplay from './BookCartDisplay';
import Book from "../../services/types/Book";
import CoverImage from './../../assets/images/Catch22.jpg';
import { CartContext } from "../../services/context/CartContext";


describe("Testing BookCartDisplay Component", () => {
    it("renders correct book information and remove button", () => {
        const bookToDisplay : Book = {
            id: "99", 
            title: "Book Title", 
            author: "Book Author", 
            price: 6.99, 
            imageURL: CoverImage
        };

        render(
            <CartContext.Provider value={{changeItemQuantity: jest.fn(), removeCartItem: jest.fn()}}>
                <BookCartDisplay book={bookToDisplay} />
            </CartContext.Provider>
            );

        expect(screen.getByAltText('cover')).toHaveAttribute('src', 'Catch22.jpg');
        expect(screen.getByText('Book Title')).toBeInTheDocument();
        expect(screen.getByText("$6.99")).toBeInTheDocument();
        expect(screen.getByText('Remove')).toBeInTheDocument();
    });

})