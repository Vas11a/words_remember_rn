export interface ICollection {
    name: string;
    languages: string;
    words: string;
    id: number;
    words_count: number;
    best_result: number;
    collection_level: ColLevel;
}

export type ColLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2' | 'no_level';