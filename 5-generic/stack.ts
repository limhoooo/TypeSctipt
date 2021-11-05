{

    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }
    type StackNode<T> = {
        value: T;
        head?: StackNode<T>;
    }
    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private _head?: StackNode<T>;
        public get size(): number {
            return this._size;
        }

        push(value: T) {
            console.log(value);
            const node = { value, head: this._head }
            this._head = node;
            this._size++;
        }
        pop(): T {
            if (this._head == null) {
                throw new Error("값이 없음.");
            }
            const node = this._head;
            this._head = node.head;
            this._size--;
            return node.value
        }

    }

    const stack = new StackImpl<string>();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }

    const stack2 = new StackImpl<number>();
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    while (stack2.size !== 0) {
        console.log(stack2.pop());
    }
}