export const isNavLinkActive = (pathname: string, href: string) => {
    const sanitizedPathname = pathname.split('?')[0].split('#')[0];
    const sanitizedHref = href.split('?')[0].split('#')[0];

    if (sanitizedPathname === sanitizedHref) {
        return true;
    }

    if (sanitizedHref === '/') {
        return false;
    }

    return sanitizedPathname.startsWith(`${sanitizedHref}/`);
};
