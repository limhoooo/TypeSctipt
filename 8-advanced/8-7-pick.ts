{
    // 타입중에서 몇개만 골라서 사용 할 수 있게 해주는것
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }
    // Video 타입 안에 id 와 title 만 사용
    type VideoMetadata = Pick<Video, 'id' | 'title'>;
}