import { render, screen } from '@testing-library/react';
import Logo from '../components/Logo';

describe('Logo', () => {
    it('renders AD brand mark with accessible label', () => {
        render(<Logo />);

        expect(screen.getByLabelText('AD logo')).toBeInTheDocument();
        expect(screen.getByText('A')).toBeInTheDocument();
        expect(screen.getByText('D')).toBeInTheDocument();
    });
});
