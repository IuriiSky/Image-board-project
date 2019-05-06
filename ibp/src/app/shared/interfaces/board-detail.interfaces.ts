export interface BoardDetail {
    name: string;
    short_name: string;
    posts: PostDetails[];  
}

export interface PostDetails {
    subject: string;
    pinned: boolean;
    content: PostContent;
    }
export interface PostContent{
    attachments : PostAttachment[];
}

export interface PostAttachment{
    type:string;
    file: FileAttachment;
}

export interface FileAttachment{
    url: string;
    thumb: Thumb;
}
export interface Thumb{
    url:string;
}



