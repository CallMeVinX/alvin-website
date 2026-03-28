import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

jest.mock('next/image', () => {
    const MockNextImage = ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={alt} {...props} />
    );
    MockNextImage.displayName = 'MockNextImage';
    return MockNextImage;
});

describe('ProjectsSection', () => {
    it('renders featured title and project cards', () => {
        render(<ProjectsSection />);

        expect(screen.getByText(/featured work/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /projects that turn ideas into polished products/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /floovia/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /personal portfolio/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /project atlas/i })).toBeInTheDocument();
    });

    it('renders status badges, stack tags, and project actions', () => {
        render(<ProjectsSection />);

        expect(screen.getAllByText(/completed/i)).toHaveLength(2);
        expect(screen.getByText(/in progress/i)).toBeInTheDocument();

        expect(screen.getAllByText('#ReactJS')).toHaveLength(2);
        expect(screen.getByText('#FramerMotion')).toBeInTheDocument();

        expect(screen.getAllByRole('link', { name: /read more/i })).toHaveLength(3);
        expect(screen.getAllByRole('link', { name: /demo/i })).toHaveLength(3);
        expect(screen.getAllByRole('link', { name: /source/i })).toHaveLength(3);
    });
});
