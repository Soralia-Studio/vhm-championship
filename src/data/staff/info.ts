import type { StaffDataType } from '@/types/types'

const staffData: StaffDataType[] = [
    {
        id: 'tao-xaxalele',
        name: 'tao',
        position: 'Xaxalele',
        avatar_url: '/logo_placeholder.jpg'
    },
    {
        id: 'tao-2-xaxalele',
        name: 'tao 2',
        position: 'Xaxalele',
        avatar_url: '/logo_placeholder.jpg'
    },
    {
        id: 'tao-3-xaxalele',
        name: 'tao 3',
        position: 'Xaxalele',
        avatar_url: '/logo_placeholder.jpg'
    },
    {
        id: 'tao-4-xaxalele',
        name: 'tao 4',
        position: 'Xaxalele',
        avatar_url: '/logo_placeholder.jpg'
    },
]

export const groupedStaff = Object.groupBy(staffData, (staff) => staff.position)