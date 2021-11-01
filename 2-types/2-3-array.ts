{
    // Array
    const fruitsStr: string[] = ['토마토', '바나나'];
    const fruitsNum: number[] = [1, 2];
    const fruits: Array<string> = ['토마토', '바나나'];


    // readonly
    // obj를 변경 할수 없게 함
    function printArray(fruits: readonly string[]) { }


    // Tuple 
    // 서로다른 배열을 함께 갖을수 있음
    // 권장 X
    // -> interface, type alias, class 로 대체하는게 좋음
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}