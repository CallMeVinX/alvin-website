'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MODE_OPTIONS } from '../constants/modeOptions';
import { NavbarMode } from '../types/Navbar.types';

interface ModeToggleProps {
	value?: NavbarMode;
	onChange?: (mode: NavbarMode) => void;
	className?: string;
}

const ModeToggle = ({ value, onChange, className }: ModeToggleProps) => {
	const [internalMode, setInternalMode] = useState<NavbarMode>('pro');

	const mode = value ?? internalMode;

	const setMode = (nextMode: NavbarMode) => {
		if (value === undefined) {
			setInternalMode(nextMode);
		}

		onChange?.(nextMode);
	};

	const activeOption = MODE_OPTIONS.find((option) => option.id === mode) ?? MODE_OPTIONS[0];

	return (
		<div className={`grid grid-cols-2 bg-zinc-900/50 p-1 rounded-full border border-white/5 relative items-center ${className ?? ''}`}>
			{MODE_OPTIONS.map((option) => {
				const Icon = option.icon;
				const isActive = option.id === mode;

				return (
					<button
						key={option.id}
						onClick={() => setMode(option.id)}
						className={`relative z-10 flex w-full items-center justify-center gap-2 px-3 sm:px-4 py-1.5 text-xs font-medium text-center transition-colors duration-300 ${isActive ? option.activeTextClass : 'text-zinc-500 hover:text-zinc-300'}`}
					>
						<Icon size={14} />
						<span>{option.label}</span>
					</button>
				);
			})}

			<motion.div
				layoutId="active-mode"
				className={`absolute inset-y-1 rounded-full z-0 ${activeOption.activeBackgroundClass}`}
				initial={false}
				animate={{
					left: mode === 'pro' ? '4px' : '50%',
					width: 'calc(50% - 4px)',
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			/>
		</div>
	);
};

export default ModeToggle;