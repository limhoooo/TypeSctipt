{
    // // JavaScript // X
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript // O
    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript // X
    // function jsFetchNum(id) {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript // X
    // function fetchNum(id: string): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // JavaScript => TypeScript
    // Optional parameter
    function printName(fistName: string, lastName?: string) {
        console.log(fistName);
        console.log(lastName);
    }
    printName('Lim', 'Ho');
    printName('LimHo');
    printName('LimHo', undefined);

    // Default parameter
    // 디폴트 값을 파라미터에 지정할 수 있음
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage();

    // Rest parameter
    // 파라미터를 동적으로 여러개 배열형식으로 받을수있음
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));


}