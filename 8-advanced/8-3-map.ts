{
    type Video = {
        title: string;
        author: string;
    }
    type Video2 = {
        title?: string;
        author?: string;
    }

    type Optional<T> = {
        [P in keyof T]?: T[P];
    }

    type VideoOptional = Optional<Video>;

    const videoOp: VideoOptional = {
        title: 'ss',
    }

    // readonly 로 변경
    type ReadOnly<T> = {
        readonly [P in keyof T]?: T[P];
    }
    // null 가능
    type Nullable<T> = { [P in keyof T]: T[P] | null }
}