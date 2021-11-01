{

    /**
     * JavaScript
     * Primitive : number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */

    // number
    const num: number = 1;
    const float: number = 1.1;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = true;

    // undefined
    let name: undefined; // 단독으로 사용 안함
    // name = 's'; X
    let age: number | undefined; // O
    age = undefined;
    age = 1;
    // ex
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 단독으로 사용 안함
    let person2: string | null; // 이거보다 undefined 를 이용많이함

    // unKnoen // 알수없는 
    // 어떤 데이터던 넣을수있음
    let notSure: unknown = 0; // 가능한 사용 X
    notSure = 1;
    notSure = 'ss'

    // any // X
    let anything: any = 0; // 가능한 사용 X
    anything = 'hello';

    // void 
    // 아무것도 리턴하지않음
    function print(): void {
        console.log('hello');
    }

    let unusalble: void = undefined; // X

    // never
    // 아무것도 리턴하지않음
    // 에러핸들링 할때 사용
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
    }

    // object
    let obj: object; // X
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'ellie' })
    acceptSomeObject(['1'])
}