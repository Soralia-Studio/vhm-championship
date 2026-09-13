import React from 'react';
import type { StaffDataType } from '@/types/types';
import { StaffCard } from './StaffCard';

type StaffGroupProps = {
    position: string;
    members: StaffDataType[];
};

export const StaffGroup: React.FC<StaffGroupProps> = ({ position, members }) => {
    if (!members || members.length === 0) return null;

    return (
        <section className='mb-6'>
            <h2 className='text-6xl font-bold uppercase underline decoration-1 underline-offset-[2rem] mb-10'>
                {position}
            </h2>

            <div className='flex flex-row flex-wrap gap-8'>
                {members.map((member) => (
                    <StaffCard key={member.id} cover={member.avatar_url || 'logo_placeholder.jpg'} name={member.name} />
                ))}
            </div>
        </section>
    );
};
