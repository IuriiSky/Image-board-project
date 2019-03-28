export interface Board {
    id: number,
    name: string,
    short_name: string
}

export interface CreateBoard {
    user_id: number,
    name: string,
    short_name: string
}


// {
//   "created_board": {
//     "id": 6,
//     "name": "games",
//     "short_name": "g",
//     "description": null,
//     "user_id": 1,
//     "created_at": "2019-03-26T18:15:33.246Z",
//     "updated_at": "2019-03-26T18:15:33.246Z"
//   },
//   "current_user": null
// }