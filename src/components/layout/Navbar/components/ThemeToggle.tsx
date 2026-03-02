'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
    value?: boolean;
    onChange?: (isDark: boolean) => void;
}

const ThemeToggle = ({ value, onChange }: ThemeToggleProps) => {
    const [internalIsDark, setInternalIsDark] = useState(true);

    const isDark = value ?? internalIsDark;

    const toggleTheme = () => {
        const nextTheme = !isDark;

        if (value === undefined) {
            setInternalIsDark(nextTheme);
        }

        onChange?.(nextTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 rounded-xl flex items-center justify-center transition-colors group overflow-hidden"
        >
            {/* Background Glow - Konsisten dengan NavLink kamu */}
            <motion.div
                animate={{
                    boxShadow: isDark
                        ? ["0 0 10px rgba(6, 182, 212, 0.2)", "0 0 20px rgba(6, 182, 212, 0.4)", "0 0 10px rgba(6, 182, 212, 0.2)"]
                        : ["0 0 10px rgba(234, 179, 8, 0.2)", "0 0 20px rgba(234, 179, 8, 0.4)", "0 0 10px rgba(234, 179, 8, 0.2)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute inset-0 -z-10 rounded-xl border ${isDark ? 'bg-cyan-500/10 border-cyan-500/20' : 'bg-yellow-500/10 border-yellow-500/20'
                    }`}
            />

            {/* Animasi Ikon */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ y: 20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {isDark ? (
                        <Sun size={20} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    ) : (
                        <Moon size={20} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;