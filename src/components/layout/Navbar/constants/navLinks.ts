import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { NavItemData } from '../types/Navbar.types';

export const PRO_NAV_LINKS: readonly NavItemData[] = [
    { label: 'Home', href: '/profesional#home', icon: Home },
    { label: 'Profile', href: '/profesional#profile', icon: User },
    { label: 'Skills', href: '/profesional#skills', icon: Briefcase },
    { label: 'Projects', href: '/profesional#projects', icon: Code },
    { label: 'Contact', href: '/profesional#contact', icon: Mail },
] as const;

export const PERSONAL_NAV_LINKS: readonly NavItemData[] = [
    { label: 'Development', href:  '/development', icon: Code },
    // { label: 'Home', href: '/personal#home', icon: Home },
    // { label: 'Profile', href: '/personal#profile', icon: User },
    // { label: 'Skills', href: '/personal#skills', icon: Briefcase },
    // { label: 'Projects', href: '/personal#projects', icon: Code },
    // { label: 'Contact', href: '/personal#contact', icon: Mail },
] as const;
