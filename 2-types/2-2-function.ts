{
    // JavaScript // X
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript // O
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript // X
    function jsFetchNum(id) {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript // X
    function fetchNum(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
}