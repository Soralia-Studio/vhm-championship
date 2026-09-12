export type StaffDataType = {
    id: string,
    name: string,
    position: string | 'Staff',
    avatar_url: string?
}

type DiffucultyName = 'Easy' | 'Normal' | 'Hard' | 'Master' | 'Re:Master';

type ChartDifficultyStruct = {
    level: string,
    difficulty: DiffucultyName,
    noteCount: number,
}

export type ChartDataType = {
    id: string,
    name: string,
    author: string,
    chartDesigner: string,
    cover: string,
    properties: {
        bpm: number,
        difficulties: ChartDifficultyStruct[]
    }
}