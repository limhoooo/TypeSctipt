type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// 공통점
// 둘다 obj 형태이다
const obj1: PositionType = {
    x: 1,
    y: 1,
}
const obj2: PositionInterface = {
    x: 1,
    y: 1,
}
// Class
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
}

// Extends
interface ZPosInter extends PositionInterface {
    z: 1;
}
type ZPosType = PositionType & { z: number };


// 차이점 


// 인터페이스는 같은이름으로 합쳐서 사용 할 수 있다.
// 다른곳에서 사용할땐 x y z 를 다 불러와야함.
interface test {
    x: number;
    y: number;
}
interface test {
    z: number;
}
// type 에서만 쓸 수 있는 방식
type Person = {
    name: string,
    age: number
}
type Name = Person['name']; // Name 은 string type

// 유니온 타입
type test1 = '1' | '2' | '3'