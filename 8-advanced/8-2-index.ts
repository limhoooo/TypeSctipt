{
    type Animal = {
        name: string;
        age: 10;
        gender: 'male' | 'female';
    }
    // 대괄호 형식으로도 타입 추가가능
    type Name = Animal['name']; // Name = string

    type Gender = Animal['gender'] // 'male' | 'female';

    // keyof 는 객체안의 key 를 사용하는 것
    type Keys = keyof Animal; // 'name' | 'age' | 'gender' 
    // 위의 세가지 문자열로만 타입 추가 가능
    const key: Keys = "gender";

    type Person = {
        name: string;
        gender: Animal['gender']; // 'male' | 'female';
    }
}