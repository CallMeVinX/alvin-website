'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { NavbarMode } from '@/components/layout/Navbar/types/Navbar.types';

interface ModeContextValue {
    mode: NavbarMode;
    setMode: (mode: NavbarMode) => void;
}

const ModeContext = createContext<ModeContextValue>({
    mode: 'pro',
    setMode: () => { },
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<NavbarMode>('pro');

    const value = useMemo(() => ({ mode, setMode }), [mode]);

    return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
    return useContext(ModeContext);
}
