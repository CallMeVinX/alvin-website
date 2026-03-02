import Link from "next/link";
import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { NavLinkInterface } from "../types/Navbar.types";

interface NavLinkProps extends NavLinkInterface {
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ label, href, icon: Icon, isActive, onClick }: NavLinkProps) => {
    return (
        <Link href={href} onClick={onClick} className="relative px-4 py-2 flex items-center gap-2 text-sm transition-colors group">
            {/* Icon & Label */}
            <Icon 
                size={18} 
                className={`z-10 transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-gray-200"}`} 
            />
            <span className={`z-10 transition-colors duration-300 font-medium ${isActive ? "text-cyan-400" : "text-gray-300 group-hover:text-white"}`}>
                {label}
            </span>

            {isActive && (
                <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 -z-10 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                    animate={{
                        boxShadow: [
                            "0 0 10px rgba(6, 182, 212, 0.3)",
                            "0 0 25px rgba(6, 182, 212, 0.6)",
                            "0 0 10px rgba(6, 182, 212, 0.3)",
                        ],
                    }}
                    transition={{
                        layout: { type: "spring", bounce: 0.2, duration: 0.6 },
                        boxShadow: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />
            )}
        </Link>
    );
};

export default NavLink;