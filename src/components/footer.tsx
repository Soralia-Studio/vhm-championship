'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
            className='w-full flex justify-center items-center pb-6 sm:pb-8'
        >
            <Image
                src={'/collaborator.png'}
                alt='collaborators'
                width={610}
                height={183}
                className='w-64 sm:w-80 md:w-96 lg:w-112 h-auto'
            />
        </motion.footer>
    );
};

export default Footer;
