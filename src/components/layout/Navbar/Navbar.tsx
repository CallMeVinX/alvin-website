'use client';

import { MouseEvent, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PERSONAL_NAV_LINKS, PRO_NAV_LINKS } from "./constants/navLinks";
import { isNavLinkActive } from "./hooks/useActivePath";
import NavLink from "./components/NavLink";
import ModeToggle from "./components/ModeToggle";
import Logo from "./components/Logo";
import { NavbarMode } from "./types/Navbar.types";
import { useMode } from "@/components/providers/ModeProvider";

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname() ?? '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState('');
    const { mode, setMode } = useMode();
    const isObserverLockedRef = useRef(false);
    const lockedHashRef = useRef('');
    const observerUnlockTimerRef = useRef<number | null>(null);
    const navLinks = mode === 'pro' ? PRO_NAV_LINKS : PERSONAL_NAV_LINKS;

    useEffect(() => {
        const routeMode: NavbarMode = pathName === '/development' || pathName.startsWith('/personal') ? 'pers' : 'pro';

        if (routeMode !== mode) {
            setMode(routeMode);
        }
    }, [mode, pathName, setMode]);

    useEffect(() => {
        return () => {
            if (observerUnlockTimerRef.current) {
                window.clearTimeout(observerUnlockTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const lockObserverToHash = (nextHash: string) => {
            lockedHashRef.current = nextHash;
            isObserverLockedRef.current = Boolean(nextHash);

            if (observerUnlockTimerRef.current) {
                window.clearTimeout(observerUnlockTimerRef.current);
            }

            if (!nextHash) {
                observerUnlockTimerRef.current = null;
                return;
            }

            observerUnlockTimerRef.current = window.setTimeout(() => {
                isObserverLockedRef.current = false;
                lockedHashRef.current = '';
                observerUnlockTimerRef.current = null;
            }, 950);
        };

        const syncHash = () => {
            const nextHash = window.location.hash;
            setCurrentHash(nextHash);
            lockObserverToHash(nextHash);
        };

        window.addEventListener('hashchange', syncHash);
        window.addEventListener('popstate', syncHash);
        syncHash();

        return () => {
            window.removeEventListener('hashchange', syncHash);
            window.removeEventListener('popstate', syncHash);
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
            return;
        }

        const activeLinkSet = mode === 'pro' ? PRO_NAV_LINKS : PERSONAL_NAV_LINKS;

        const sectionIds = activeLinkSet
            .map((link) => link.href.split('#')[1])
            .filter((id): id is string => Boolean(id));

        const observedSections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (observedSections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length === 0) {
                    return;
                }

                const topSectionId = visibleEntries[0].target.id;
                if (topSectionId) {
                    const nextHash = `#${topSectionId}`;
                    const isLocked = isObserverLockedRef.current;

                    if (isLocked && lockedHashRef.current && nextHash !== lockedHashRef.current) {
                        return;
                    }

                    setCurrentHash(nextHash);
                }
            },
            {
                root: null,
                rootMargin: '-96px 0px -55% 0px',
                threshold: [0.2, 0.35, 0.5, 0.7],
            }
        );

        observedSections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [mode]);

    const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.includes('#')) {
            setCurrentHash('');
            lockedHashRef.current = '';
            isObserverLockedRef.current = false;

            if (observerUnlockTimerRef.current) {
                window.clearTimeout(observerUnlockTimerRef.current);
                observerUnlockTimerRef.current = null;
            }

            return;
        }

        const [targetPath, hash] = href.split('#');
        const nextHash = hash ? `#${hash}` : '';
        setCurrentHash(nextHash);
        lockedHashRef.current = nextHash;
        isObserverLockedRef.current = true;

        const normalizedTargetPath = targetPath || pathName;
        const isSamePageTarget = normalizedTargetPath === pathName;

        if (isSamePageTarget && hash) {
            event.preventDefault();

            const targetSection = document.getElementById(hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            window.history.pushState(null, '', nextHash);
        }

        if (observerUnlockTimerRef.current) {
            window.clearTimeout(observerUnlockTimerRef.current);
        }

        observerUnlockTimerRef.current = window.setTimeout(() => {
            isObserverLockedRef.current = false;
            lockedHashRef.current = '';
            observerUnlockTimerRef.current = null;
        }, 950);
    };

    const isLinkActive = (href: string) => {
        if (href.includes('#')) {
            const [, hash] = href.split('#');

            if (!hash) {
                return false;
            }

            if (!currentHash) {
                return hash === 'home';
            }

            return currentHash === `#${hash}`;
        }

        return isNavLinkActive(pathName, href);
    };

    const handleModeChange = (nextMode: NavbarMode) => {
        setMode(nextMode);

        const target = nextMode === 'pro' ? '/profesional#home' : '/development';
        router.push(target);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
            <div className="flex h-20 justify-between items-center px-4 sm:px-8 gap-8">
                <Logo />

                <div className="md:hidden flex items-center gap-2">
                    <button
                        type="button"
                        className="p-2 rounded-lg border border-white/10 text-zinc-200 hover:text-white hover:border-white/20 transition-colors"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link.href);
                            return <NavLink key={link.label} {...link} isActive={isActive} onClick={(event) => handleNavLinkClick(event, link.href)} />;
                        })}
                    </div>

                    <div className="flex items-center gap-3 border-l border-white/10 pl-6">
                        <ModeToggle value={mode} onChange={handleModeChange} />
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 border-t border-white/5">
                    <div className="flex flex-col gap-2 pt-3" onClick={() => setIsMobileMenuOpen(false)}>
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link.href);
                            return <NavLink key={link.label} {...link} isActive={isActive} onClick={(event) => handleNavLinkClick(event, link.href)} />;
                        })}
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/10 mt-3 pt-3">
                        <ModeToggle className="w-full" value={mode} onChange={handleModeChange} />
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar