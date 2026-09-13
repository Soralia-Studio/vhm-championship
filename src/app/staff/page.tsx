import { StaffGroup } from '@/components/staff/StaffGroup';
import { groupedStaff } from '@/data/staff/info';

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col pt-[95px] sm:pt-[111px] pb-8 px-4 sm:px-8'>
            <div className='w-full max-w-4xl mx-auto flex flex-col gap-6'>
                <div
                    className='rounded-2xl py-11 px-12 flex flex-col gap-0'
                    style={{ background: 'rgba(15, 20, 50, 0.72)', backdropFilter: 'blur(12px)' }}
                >
                    {Object.entries(groupedStaff).map(([position, members]) => {
                        if (!members || members.length === 0) return null;

                        return <StaffGroup key={position} position={position} members={members} />;
                    })}
                </div>
            </div>
        </div>
    );
}
