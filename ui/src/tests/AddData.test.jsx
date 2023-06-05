import { render, screen } from '@testing-library/react';
import AddData from '../pages/AddData';

describe('AddData', () => {
    it('renders AddData page', () => {
        render(<AddData />);
        screen.debug();

        // headers
        expect(screen.getByText("Add Data")).toBeInTheDocument();
        expect(screen.getByText("Add a country")).toBeInTheDocument();
        expect(screen.getByText("Add a state")).toBeInTheDocument();

        // input components
        expect(screen.getAllByText("Enter a code")).toHaveLength(2);
        expect(screen.getAllByText("Enter a name")).toHaveLength(2);
        expect(screen.getByText("-Select a country-")).toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
});