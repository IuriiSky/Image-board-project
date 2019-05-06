export interface Board {
    id: number,
    name: string,
    short_name: string,
}

export interface CreateBoard {
    name: string,
    short_name: string,
    description: string,
}
