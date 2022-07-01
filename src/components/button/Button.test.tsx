import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Test Button Component', () => {
    it('renders provided text correctly', () => {
        render(<Button text="test"/>)

        const btn = screen.getByRole('button');

        expect(btn).toBeInTheDocument();
        expect(btn.textContent).toMatch(/test/i);
    })
});