import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                    <h3 class="video__title"></h3>
                </div>
                </section>`);
        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToembeddedURL(url);
        console.log(url);

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }

    // https://www.youtube.com/watch?v=Wq6NiXskxus
    // https://www.youtube.com/embed/Wq6NiXskxus
    private convertToembeddedURL(url: string): string {
        // 정규표현식: https://regexr.com/5l6nr
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}

// <iframe width="704" height = "396"
// src = "https://www.youtube.com/embed/Wq6NiXskxus"
// title = "YouTube video player"
// frameborder = "0"
// allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen > </iframe>