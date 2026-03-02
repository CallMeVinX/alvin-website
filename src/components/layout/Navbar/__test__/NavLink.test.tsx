import { render, screen } from '@testing-library/react';
import { Home } from 'lucide-react';
import NavLink from '../components/NavLink';

jest.mock('next/link', () => {
    const MockNextLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    );
    MockNextLink.displayName = 'MockNextLink';

    return MockNextLink;
});

describe('NavLink', () => {
    it('renders anchor and inactive styles', () => {
        const { container } = render(<NavLink label="Home" href="/" icon={Home} isActive={false} />);

        const link = screen.getByRole('link', { name: /home/i });
        expect(link).toHaveAttribute('href', '/');

        const text = screen.getByText('Home');
        expect(text).toHaveClass('text-gray-300');

        expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders active visual state and glow container', () => {
        const { container } = render(<NavLink label="Projects" href="/projects" icon={Home} isActive={true} />);

        const text = screen.getByText('Projects');
        expect(text).toHaveClass('text-cyan-400');

        const glow = container.querySelector('div[class*="border-cyan-500/20"]');
        expect(glow).toBeInTheDocument();
    });
});
