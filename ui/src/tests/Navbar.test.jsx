import { render, screen, } from '@testing-library/react';
import Navbar from '../Navbar';

describe("Navbar", () => {
    beforeEach(() => {
        const testLinks = [
            { path: "/path1", name: "name1" },
            { path: "/path2", name: "name2" }
        ];

        render(<Navbar home="testHome" links={testLinks} />);
        // screen.debug();
    });

    it("renders Navbar component", () => {
        expect(screen.getByText("testHome")).toBeInTheDocument();
        expect(screen.getByText("name1")).toBeInTheDocument();
        expect(screen.getByText("name2")).toBeInTheDocument();
    });

    it("redirects to correct page", async () => {
        expect(screen.getByRole("link", { name: "testHome" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "name1" })).toHaveAttribute("href", "/path1");
        expect(screen.getByRole("link", { name: "name2" })).toHaveAttribute("href", "/path2");
    });
});