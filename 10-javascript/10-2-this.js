// this : 호출한것의 문맥을 나타냄

function simpleFunc() {
    console.log(this);
}
simpleFunc(); // window 가 호출됨


class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    }
}
const counter = new Counter();
counter.increase(); // Counter 가 호출됨


const caller = counter.increase();
caller(); // undefined 호출됨


// 에로우 펑션
// 스코프가 상위 범위이다
// 스코프가 정적이다. (선언시 bind 됨)

// 일반펑션
// 스코프가 현재 범위이다
// 스코프가 동적으로 변경(bind 가 안됨)