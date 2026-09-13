'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const lastScrollY = useRef(0);
    const isHomePage = pathname === '/';
    const isFormatPage = pathname === '/format';

    useEffect(() => {
        if (!isFormatPage) return;

        const handleScroll = () => {
            const currentY = window.scrollY;
            setNavVisible(currentY < lastScrollY.current || currentY < 50);
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFormatPage]);

    const links = [
        { href: '/', label: 'TRANG CHỦ' },
        { href: '/format', label: 'THỂ THỨC' },
        { href: '/pool', label: 'POOL' },
        { href: '/staff', label: 'NHÂN SỰ' },
    ];

    return (
        <>
            <motion.nav
                initial={isHomePage ? { opacity: 0, y: 32 } : false}
                animate={isHomePage ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
                className='fixed left-4 right-4 sm:left-8 sm:right-8 top-4 sm:top-6 z-50 bg-navbar rounded-xl shadow-xl flex items-center justify-between h-16 sm:h-18'
                style={
                    isFormatPage
                        ? {
                              opacity: navVisible ? 1 : 0,
                              transform: navVisible ? 'translateY(0)' : 'translateY(20px)',
                              pointerEvents: navVisible ? 'auto' : 'none',
                              transition: 'opacity 0.3s ease, transform 0.3s ease',
                          }
                        : undefined
                }
            >
                <div className='flex items-center gap-4 sm:gap-6 lg:gap-8 h-full'>
                    <div className='w-20 h-full sm:w-28 relative overflow-hidden flex-shrink-0 rounded-l-xl'>
                        <Image src={'/logo_placeholder.jpg'} alt='logo' fill className='object-cover' />
                    </div>

                    <ul className='hidden md:flex gap-5 lg:gap-7 xl:gap-9 font-bold text-sm lg:text-base xl:text-lg items-center text-white'>
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className='relative'>
                                    <Link
                                        href={link.href}
                                        className='relative pb-1 block hover:opacity-80 transition-opacity duration-200 whitespace-nowrap'
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId='underline'
                                                className='absolute left-[10%] right-[10%] bottom-0 h-0.5 bg-white rounded-full'
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='flex items-center pr-6'>
                    <a
                        href='https://google.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hidden md:block font-bold text-sm lg:text-base xl:text-lg text-white whitespace-nowrap hover:opacity-80 transition-opacity duration-200'
                    >
                        ĐĂNG KÝ
                    </a>

                    <button
                        className='md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-white focus:outline-none'
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label='Toggle menu'
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className='block w-6 h-0.5 bg-white rounded-full origin-center'
                            transition={{ duration: 0.25 }}
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className='block w-6 h-0.5 bg-white rounded-full'
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className='block w-6 h-0.5 bg-white rounded-full origin-center'
                            transition={{ duration: 0.25 }}
                        />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className='fixed left-4 right-4 sm:left-8 sm:right-8 top-24 z-40 bg-navbar rounded-xl shadow-xl py-4 px-6 md:hidden'
                    >
                        <ul className='flex flex-col gap-4 font-bold text-base text-white'>
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`block py-1 border-b border-white/10 hover:opacity-80 transition-opacity ${isActive ? 'opacity-100 underline underline-offset-4' : 'opacity-80'}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link
                                    href='/register'
                                    onClick={() => setMenuOpen(false)}
                                    className='block py-1 hover:opacity-80 transition-opacity opacity-80'
                                >
                                    ĐĂNG KÝ
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
