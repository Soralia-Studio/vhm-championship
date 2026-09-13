'use client';

import Footer from '@/components/footer';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Home() {
    return (
        <div className='h-screen overflow-hidden flex flex-col'>
            {/* Hero content — centered vertically in the viewport */}
            <div className='flex-1 flex flex-col items-center justify-center pt-20 sm:pt-24 pb-2'>
                <div className='flex flex-col items-center gap-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    >
                        <Image
                            src={'/ManCafe.png'}
                            alt='logo'
                            width={2560}
                            height={3840}
                            className='h-[38vh] sm:h-[42vh] lg:h-[46vh] w-auto mx-auto drop-shadow-2xl'
                            priority
                        />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                        className='font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest drop-shadow-lg select-none'
                    >
                        CAFE
                    </motion.span>
                </div>
            </div>

            {/* Footer — sponsors at the bottom */}
            <Footer />
        </div>
    );
}
