{
    /**
     * Type Inference
     * 선언과 동시에 value 값을 보고 type을 추론
     */
    let text = 'hello';
    //text = 1;

    function print(message = 'hi') {
        console.log(message);
    }
    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2);

}