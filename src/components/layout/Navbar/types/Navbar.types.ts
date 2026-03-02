import { LucideIcon } from "lucide-react";

export interface BaseLink {
    label: string,
    href: string,
}

export interface NavLinkInterface extends BaseLink {
    icon: LucideIcon,
    isActive: boolean
}

export interface NavItemData extends BaseLink {
    icon: LucideIcon,
}

export type NavbarMode = 'pro' | 'pers';

export interface ModeOption {
    id: NavbarMode,
    label: string,
    icon: LucideIcon,
    activeTextClass: string,
    activeBackgroundClass: string,
}