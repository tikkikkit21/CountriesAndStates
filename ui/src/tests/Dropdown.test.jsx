import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../src/Dropdown';

describe("Dropdown", () => {
    it("renders Dropdown component", () => {
        const testData = [
            { key: "key1", value: "val1", text: "text1" },
            { key: "key2", value: "val2", text: "text2" },
            { key: "key3", value: "val3", text: "text3" }
        ];

        render(<Dropdown id="testId" menuLabel="test" data={testData} />);
        // screen.debug();

        expect(screen.getByText("-Select a test-")).toBeInTheDocument();
        expect(screen.getByText("text1")).toBeInTheDocument();
        expect(screen.getByText("text2")).toBeInTheDocument();
        expect(screen.getByText("text3")).toBeInTheDocument();
    });

    it("selects an option from Dropdown", () => {
        const testData = [
            { key: "key1", value: "val1", text: "text1" },
            { key: "key2", value: "val2", text: "text2" },
            { key: "key3", value: "val3", text: "text3" }
        ];
        const onChange = vi.fn();

        render(<Dropdown id="testId" menuLabel="test" data={testData} onChange={onChange} />);
        fireEvent.change(screen.getByTestId("testId"), { target: { value: "val2" } });

        expect(onChange).toHaveBeenCalledTimes(1);
        const options = screen.getAllByTestId("testOption");
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
        expect(options[2].selected).toBeFalsy();
    });
});