{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }
    const result = checkNotNullBad(123);
    console.log(result);
    checkNotNullBad(null);



    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error("not valid number!");
        }
        return arg;
    }
    const number: number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}