import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartIcon from './CartIcon';
import { CartContext } from "../../services/context/CartContext";
import { BrowserRouter } from "react-router-dom";

describe('Testing CartIcon Component', () => {
    it('renders correct cart size', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{cart: ['', '', '']}}>
                    <CartIcon />
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('does not render cart size when size is zero', () => {
        render(
            <BrowserRouter>
                <CartContext.Provider value={{cart: ['', '', '']}}>
                    <CartIcon />
                </CartContext.Provider>
            </BrowserRouter>
        );

        expect(screen.queryByText('0')).not.toBeInTheDocument();
    })
})