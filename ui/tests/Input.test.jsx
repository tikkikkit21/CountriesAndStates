import { render, screen } from '@testing-library/react';
import Input from '../Input';

describe("Input", () => {
    it("renders Input component", () => {
        render(<Input name="testName" id="testId" />);
        // screen.debug();

        expect(screen.getByText("Enter a testName")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter a testName").id).toBe("testId");
    });
});