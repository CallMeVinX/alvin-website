import { fireEvent, render, screen } from '@testing-library/react';
import ModeToggle from '../components/ModeToggle';

describe('ModeToggle', () => {
    it('applies optional className for layout composition', () => {
        const { container } = render(<ModeToggle className="w-full" />);

        expect(container.firstElementChild).toHaveClass('w-full');
    });

    it('switches active mode in uncontrolled mode', () => {
        render(<ModeToggle />);

        const proButton = screen.getByRole('button', { name: /professional/i });
        const personalButton = screen.getByRole('button', { name: /personal/i });

        expect(proButton).toHaveClass('text-cyan-400');

        fireEvent.click(personalButton);

        expect(personalButton).toHaveClass('text-purple-400');
    });

    it('calls onChange in controlled mode and keeps controlled selection', () => {
        const onChange = jest.fn();
        render(<ModeToggle value="pro" onChange={onChange} />);

        const proButton = screen.getByRole('button', { name: /professional/i });
        const personalButton = screen.getByRole('button', { name: /personal/i });

        fireEvent.click(personalButton);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith('pers');
        expect(proButton).toHaveClass('text-cyan-400');
    });
});
