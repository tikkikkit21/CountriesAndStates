import { render, screen, waitFor } from '@testing-library/react';
import State from '../src/State';

describe("State", () => {
    it("renders State component", async () => {
        render(<State code="US" />);
        await waitFor(() => screen.getByText("Iowa"));
        // screen.debug();

        expect(screen.getByText("Iowa")).toBeInTheDocument();
        expect(screen.getByText("Virginia")).toBeInTheDocument();
        expect(screen.getByText("California")).toBeInTheDocument();
        expect(screen.getByText("Washington D.C.")).toBeInTheDocument();
    });
});