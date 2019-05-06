export interface Post {
    board_index: number;
    post_index: string;
}

export interface CreatePost {
    board_index: string;
    subject: string;
    text: string;
    file: File;
}