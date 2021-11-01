{
    /**
     * 
     * Type Aliases
     * 타입을 직접 정의할 수 있음
     * 
     */
    type Text = string;
    const name: Text = 'ss';
    const address: Text = 'sss';

    type Num = number;
    type Student = {
        name: string,
        age: number
    };
    const student: Student = {
        name: 'limHo',
        age: 28,
    }


    /**
     * String Literal Types
     * type 을 string 으로도 지정할 수 있다
     * 지정한 string type 으로만 선언 가능
     */
    type Name = 'name';
    let hoName: Name;
    hoName = 'name';

    type Boal = true;
    const isCat: Boal = true;

}