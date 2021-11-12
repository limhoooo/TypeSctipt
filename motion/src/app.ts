import { ImageComponent } from "./components/page/item/image.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";

class App {

    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('sssstitle', 'https://picsum.photos/600/300');
        this.page.addChild(image);

        const video = new VideoComponent('video Title', 'https://www.youtube.com/watch?v=Wq6NiXskxus');
        this.page.addChild(video);

        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);

        const todo = new TodoComponent('Todo Title', 'Todo Body');
        this.page.addChild(todo);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();

            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });

            dialog.setOnSubmitListener(() => {
                // 센셕을 만들어서 페이지 추가
                dialog.removeFrom(document.body);
            });

            dialog.attachTo(document.body);
        })
    }
}

new App(document.querySelector('.document')! as HTMLElement);