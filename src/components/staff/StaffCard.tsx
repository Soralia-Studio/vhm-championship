import React from 'react';
import Image from 'next/image';

type StaffCardProps = {
    cover: string;
    name: string;
};

export const StaffCard: React.FC<StaffCardProps> = ({ cover, name }) => {
    return (
        <div className='flex md:flex-col gap-4'>
            <Image
                src={cover}
                alt={`${name}'s cover`}
                height={150}
                width={150}
                // sizes="(max-width: 150px) 100vw, 33vw"
                // fill
                className='object-cover'
            />
            <span className='text-2xl font-bold text-center'>{name}</span>
        </div>
    );
};
