export class PageComponent {

    private element: HTMLUListElement;

    // PageComponent 가 생성되자마자
    // <ul class="page">This is PageComponents</ul>
    // 위의 엘리먼트가 생성됨
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponents';
    }

    // 받아온 parent 에다 insert
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}