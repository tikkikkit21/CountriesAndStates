import { render, screen } from '@testing-library/react';
import GetData from '../src/pages/GetData';

describe('GetData', () => {
    it('renders GetData page', () => {
        render(<GetData />);
        // screen.debug();

        expect(screen.getByText("Lookup Data")).toBeInTheDocument();
        expect(screen.getByText("-Select a country-")).toBeInTheDocument();
        expect(screen.getByText("-Select a state-")).toBeInTheDocument();
    });
});