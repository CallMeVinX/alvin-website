import { render, screen } from '@testing-library/react';
import HomeSection from '../HomeSection';

jest.mock('next/image', () => {
    const MockNextImage = ({ alt, fill, priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={alt} {...props} />
    );
    MockNextImage.displayName = 'MockNextImage';
    return MockNextImage;
});

describe('HomeSection', () => {
    it('renders hero identity, CTA buttons, and social links', () => {
        render(<HomeSection />);

        expect(screen.getByText(/professional mode/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /hi, i'm/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /view projects/i })).toHaveAttribute('href', '/profesional#projects');
        expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/alvin-cv.pdf');
        expect(screen.getByLabelText(/github profile/i)).toHaveAttribute('href', 'https://github.com/Alvin-Dinata');
        expect(screen.getByLabelText(/linkedin profile/i)).toHaveAttribute('href', 'https://www.linkedin.com/in/alvin-dinata/');
    });

    it('renders software engineering HUD blocks and profile portrait', () => {
        render(<HomeSection />);

        expect(screen.getByText(/live engineering signal/i)).toBeInTheDocument();
        expect(screen.getByText(/engineer dna/i)).toBeInTheDocument();
        expect(screen.getByText(/type-safe by default/i)).toBeInTheDocument();
        expect(screen.getByAltText(/portrait of alvin/i)).toBeInTheDocument();
    });
});
