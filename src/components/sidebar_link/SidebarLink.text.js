import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import{BrowserRouter} from 'react-router-dom';
import SidebarLink from "./SidebarLink";

describe("Test SidebarLink component", () => {
    it("render the correct text", () => {
        render(<BrowserRouter><SidebarLink linkTo="/" text="Home"/></BrowserRouter>);

        expect(screen.getByText("Home")).toBeInTheDocument();
    })
})