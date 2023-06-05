import { render, screen } from '@testing-library/react';
import Welcome from '../pages/Welcome';

describe('Welcome', () => {
    it('renders Welcome page', () => {
        render(<Welcome />);
        screen.debug();

        expect(screen.getByText("Welcome!")).toBeInTheDocument();
        expect(screen.getByAltText("Rotating globe")).toBeInTheDocument();
    });
});