import { isNavLinkActive } from '../hooks/useActivePath';

describe('isNavLinkActive', () => {
    it('matches root path exactly', () => {
        expect(isNavLinkActive('/', '/')).toBe(true);
        expect(isNavLinkActive('/about', '/')).toBe(false);
    });

    it('matches nested paths for non-root links', () => {
        expect(isNavLinkActive('/projects', '/projects')).toBe(true);
        expect(isNavLinkActive('/projects/case-study', '/projects')).toBe(true);
        expect(isNavLinkActive('/project', '/projects')).toBe(false);
    });

    it.each([
        ['/skills/react', '/skills', true],
        ['/skills', '/skills', true],
        ['/skills-advanced', '/skills', false],
        ['/contact?from=footer', '/contact', true],
    ])('evaluates %s against %s -> %s', (pathname, href, expected) => {
        expect(isNavLinkActive(pathname, href)).toBe(expected);
    });
});
