import { Briefcase, User } from 'lucide-react';
import { ModeOption } from '../types/Navbar.types';

export const MODE_OPTIONS: readonly ModeOption[] = [
    {
        id: 'pro',
        label: 'Professional',
        icon: Briefcase,
        activeTextClass: 'text-cyan-400',
        activeBackgroundClass: 'bg-cyan-500/20 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    },
    {
        id: 'pers',
        label: 'Personal',
        icon: User,
        activeTextClass: 'text-purple-400',
        activeBackgroundClass: 'bg-purple-500/20 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    },
] as const;
