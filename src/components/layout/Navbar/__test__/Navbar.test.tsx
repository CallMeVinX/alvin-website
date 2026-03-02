import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

const mockUsePathname = jest.fn();
const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    usePathname: () => mockUsePathname(),
    useRouter: () => ({
        push: mockPush,
    }),
}));

jest.mock('next/link', () => {
    const MockNextLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    );
    MockNextLink.displayName = 'MockNextLink';
    return MockNextLink;
});

describe('Navbar', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockUsePathname.mockReturnValue('/profesional');
        window.history.pushState({}, '', '/profesional#projects');
    });

    it('renders brand, nav links, and sets projects as active section from current hash', () => {
        render(<Navbar />);

        expect(screen.getByLabelText('AD logo')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toHaveClass('text-cyan-400');
    });

    it('opens and closes mobile menu with hamburger interaction', () => {
        render(<Navbar />);

        const openButton = screen.getByRole('button', { name: /open menu/i });
        expect(openButton).toHaveAttribute('aria-expanded', 'false');
        expect(screen.getAllByText('Contact')).toHaveLength(1);

        fireEvent.click(openButton);

        const closeButton = screen.getByRole('button', { name: /close menu/i });
        expect(closeButton).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getAllByText('Contact')).toHaveLength(2);

        const mobileProjectsLink = screen.getAllByText('Projects')[1];
        fireEvent.click(mobileProjectsLink);

        expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
    });

    it('renders mode controls on desktop and in mobile panel when opened', () => {
        render(<Navbar />);

        expect(screen.getAllByRole('button', { name: /professional/i })).toHaveLength(1);

        fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

        expect(screen.getAllByRole('button', { name: /professional/i })).toHaveLength(2);
    });

    it('falls back to home section when usePathname returns null and no hash is present', () => {
        window.history.pushState({}, '', '/profesional');
        mockUsePathname.mockReturnValueOnce(null);
        render(<Navbar />);

        expect(screen.getByText('Home')).toHaveClass('text-cyan-400');
    });

    it('switches to personal mode and routes to development page', () => {
        render(<Navbar />);

        fireEvent.click(screen.getAllByRole('button', { name: /personal/i })[0]);

        expect(mockPush).toHaveBeenCalledWith('/development');
    });
});
