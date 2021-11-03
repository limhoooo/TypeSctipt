{

    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    type StackNode = {
        // 값
        readonly value: string;
        // 연결 값
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        get size() {
            return this._size;
        }

        push(value: string) {
            // node
            const node: StackNode = { value, next: this.head };
            this.head = node;
            // stack의 size 가 1씩 증가
            this._size++;
        }
        pop(): string {
            if (this.head == null) {
                throw new Error("값이 없음.");
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    stack.push('4');
    while (stack.size !== 0) {
        console.log(stack.pop());

    }

}