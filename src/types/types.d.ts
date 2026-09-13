export type StaffDataType = {
    id: string;
    name: string;
    position: string | 'Staff';
    avatar_url: string?;
};

type DifficultyName = 'Easy' | 'Normal' | 'Hard' | 'Master' | 'Re:Master' | 'Utage';

type ChartDataType = {
    level: string;
    difficulty: DifficultyName;
    chartDesigner: string;
};

export type SongDataType = {
    id: string;
    name: string;
    author: string;
    cover: string;
    bpm: number;
    isDX: boolean;
    difficulties: ChartDataType[];
};

export type PoolItemType = {
    id: string;
    song: SongDataType;
    selectedChart: ChartDataType;
};
