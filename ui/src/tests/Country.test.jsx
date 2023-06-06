import { render, screen, waitFor } from '@testing-library/react';
import Country from '../Country';

describe("Country", () => {
    it("renders Country component", async () => {
        render(<Country />);
        await waitFor(() => screen.getByText("United States"));
        // screen.debug();

        expect(screen.getByText("United States")).toBeInTheDocument();
        expect(screen.getByText("Canada")).toBeInTheDocument();
        expect(screen.getByText("Mexico")).toBeInTheDocument();
    });

    it("checks prop usage (code)", async () => {
        render(<Country value="code" />);
        await waitFor(() => screen.getByText("United States"));

        expect(screen.getByText("United States").value).toBe("US");
        expect(screen.getByText("Canada").value).toBe("CA");
        expect(screen.getByText("Mexico").value).toBe("MX");
    });

    it("checks prop usage (id)", async () => {
        render(<Country value="id" />);
        await waitFor(() => screen.getByText("United States"));

        expect(screen.getByText("United States").value).toBe("1");
        expect(screen.getByText("Canada").value).toBe("2");
        expect(screen.getByText("Mexico").value).toBe("3");
    });
});