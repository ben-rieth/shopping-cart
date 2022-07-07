import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BookDisplay from './BookDisplay';
import Book from "../../services/types/Book";
import CoverImage from './../../assets/images/Catch22.jpg';
import { BrowserRouter } from "react-router-dom";

describe("Test BookDisplay Component", () => {
    it("renders correct book title, price, and image", () => {
        const bookToDisplay : Book = {
            id: "99", 
            title: "Book Title", 
            author: "Book Author", 
            price: 6.99, 
            imageURL: CoverImage,
            genre: []
        };
        
        render(
            <BrowserRouter>
                <BookDisplay book={bookToDisplay}/>
            </BrowserRouter>
        );
        
        expect(screen.getByAltText('cover')).toHaveAttribute('src', 'Catch22.jpg');
        expect(screen.getByText('Book Title')).toBeInTheDocument();
        expect(screen.getByText("$6.99")).toBeInTheDocument();

    })
})
