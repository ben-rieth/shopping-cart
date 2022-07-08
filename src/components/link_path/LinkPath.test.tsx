import React from "react";
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import LinkPath from "./LinkPath";
import { BrowserRouter } from "react-router-dom";

describe('Testing LinkPath component', () => {
    it('renders provided links and the current page', () => {
        render(
            <BrowserRouter>
                <LinkPath 
                    links={
                        [
                            { to: '/', title: 'Home' }
                        ]
                    } 
                    currentPage="Page"
                />
            </BrowserRouter>
        );

        const container = screen.getByRole('navigation');
        const link = screen.getByText('Home');
        const current = screen.getByText('Page');

        expect(container.childNodes.length).toBe(3);
        expect(link).toBeInTheDocument();
        expect(current).toBeInTheDocument();
    })
})