{
    // pick 과 반대임 
    // 타입중에서 지정한 몇개만 빼고 사용 할 수 있게 해주는것
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }
    // Video 타입 안에 id 와 title 만 빼고 사용
    type VideoMetadata = Pick<Video, 'id' | 'title'>;
}