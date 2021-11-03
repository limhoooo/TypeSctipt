{

    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }
    type StackNode = {
        value: string;
        head?: StackNode;
    }
    class StackImpl implements Stack {
        private _size: number = 0;
        private _head?: StackNode;
        public get size(): number {
            return this._size;
        }

        push(value: string) {
            const node: StackNode = { value, head: this._head }
            this._head = node;
            this._size++;
        }
        pop(): string {
            if (this._head == null) {
                throw new Error("값이 없음.");
            }
            const node = this._head;
            this._head = node.head;
            this._size--;
            return node.value
        }

    }

    const stack = new StackImpl();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    while (stack.size !== 0) {
        console.log(stack.pop());

    }

}