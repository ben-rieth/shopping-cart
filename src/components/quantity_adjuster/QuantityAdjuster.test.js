import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityAdjuster from "./QuantityAdjuster";

describe('Test QuantityAdjuster component', () => {
    it('renders add btn, remove btn, and input', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={2} 
                onInputChange={jest.fn()} />
        );

        const addBtn = screen.getByAltText('add');
        const removeBtn = screen.getByAltText('remove');
        const input = screen.getByRole('textbox');

        expect(addBtn).toBeInTheDocument();
        expect(addBtn).toHaveAttribute('src', 'add.svg');

        expect(removeBtn).toBeInTheDocument();
        expect(removeBtn).toHaveAttribute('src', 'remove.svg');

        expect(input).toBeInTheDocument();
    });

    it('renders delete icon instead of remove icon when quantity is 1', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={1} 
                onInputChange={jest.fn()} />
        );

        const deleteBtn = screen.getByAltText('remove');

        expect(deleteBtn).toBeInTheDocument();
        expect(deleteBtn).toHaveAttribute('src', 'delete.svg');
    });

    it('lets user edit quantity by typing into input', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={1} 
                onInputChange={jest.fn()} />
        );

        const input = screen.getByRole('textbox');

        userEvent.click(input);
        userEvent.keyboard('2');

        expect(input.value).toEqual('12')
    });

    it('does not allow user to enter non-numeric characters into input', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={1} 
                onInputChange={jest.fn()} />
        );

        const input = screen.getByRole('textbox');

        userEvent.click(input);
        userEvent.keyboard('[Key2]');

        expect(input.value).toEqual('1');
    });

    it('allows user to add to quantity by pushing the add button', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={2} 
                onInputChange={jest.fn()} />
        );

        const input = screen.getByRole('textbox');
        const addBtn = screen.getByAltText('add');

        userEvent.click(addBtn);

        expect(input.value).toEqual('3');
    });

    it('allows user to remove from quantity by pushing remove button', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={2} 
                onInputChange={jest.fn()} />
        );

        const input = screen.getByRole('textbox');
        const removeBtn = screen.getByAltText('remove');

        userEvent.click(removeBtn);

        expect(input.value).toEqual('1');
    });

    it('does not have focus on input after user hits enter', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={2}
                onInputChange={jest.fn()} />
        );

        const input = screen.getByRole('textbox');

        input.focus();
        userEvent.keyboard('{Enter}');

        expect(input).not.toHaveFocus();
    });

    it('does not show delete icon if showDeleteIcon prop is false and quantity is 1', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={1}
                showDeleteIcon={false}
                onInputChange={jest.fn()} />
        );

        const removeBtn = screen.getByAltText('remove');
        const addBtn = screen.getByAltText('add');

        expect(removeBtn).toHaveAttribute('src', 'remove.svg');

        userEvent.click(addBtn);
        expect(removeBtn).toHaveAttribute('src', 'remove.svg');

        userEvent.click(removeBtn);
        expect(removeBtn).toHaveAttribute('src', 'remove.svg');
    });

    it('does not let user go below quantity 1 when showDeleteIcon prop is false', () => {
        render(
            <QuantityAdjuster 
                initialQuantity={2}
                showDeleteIcon={false}
                onInputChange={jest.fn()} />
        );

        const removeBtn = screen.getByAltText('remove');
        const input = screen.getByRole('textbox');

        userEvent.click(removeBtn);

        expect(input.value).toEqual('1');

        userEvent.click(removeBtn);

        expect(input.value).toEqual('1');
    })
})