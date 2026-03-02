import { fireEvent, render, screen } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

describe('ThemeToggle', () => {
    it('toggles icon style in uncontrolled mode', () => {
        const { container } = render(<ThemeToggle />);

        const button = screen.getByRole('button');
        let icon = container.querySelector('svg');
        expect(icon).toHaveClass('text-cyan-400');

        fireEvent.click(button);

        icon = container.querySelector('svg');
        expect(icon).toHaveClass('text-yellow-400');
    });

    it('calls onChange in controlled mode without mutating internal state', () => {
        const onChange = jest.fn();
        const { container } = render(<ThemeToggle value={true} onChange={onChange} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(false);

        const icon = container.querySelector('svg');
        expect(icon).toHaveClass('text-cyan-400');
    });
});
