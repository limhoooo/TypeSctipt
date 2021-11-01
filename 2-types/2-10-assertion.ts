{
    /**
     * Type Assertions
     * Type 을 강제로? 직접 지정해주는것
     */

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length)
    console.log(<string>(result).length)

    const wrong: any = 5;
    // error
    console.log((wrong as Array<number>).push(1))

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    // 절대적으로 타입을 알고있다? 
    const numbers = findNumbers()!; // 느낌표
    numbers!.push(2); // 느낌표  

    // ex
    const button = document.querySelector('class')!; // 느낌표
}