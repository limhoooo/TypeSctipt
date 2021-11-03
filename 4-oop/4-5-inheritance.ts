// interface
// 추상화
// 외부에서 class 를 가져다 쓸때
// 굳이 외부에서 사용하지 않을 함수노출을
{
    // 타입선언
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // class 를 어떻게 쓸것인지 설명서? 계약서 같은 존재
    // class 안의 사용할 함수를 정의
    // 만들어진 class 의 함수를 또 한번 쪼개서 외부에서 사용할 수 있음
    // class 에 만든 interface 를 implements 해줘야함
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // public
    // private : 클래스 밖에서는 접근이 안됨
    // protected : 상속받은 클래스에서는 접근 가능함
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOW: number = 7; // class level
        private coffeeBeans: number = 0;
        // 외부에서 접근 X
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        // 생성자 함수
        // 외부에서 class 를 사용하기위한 함수 
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }
        // 외부에서 coffeeBeans을 set 하는 함수
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than");
            }
            this.coffeeBeans = beans;
        }
        clean() {
            console.log('커피머신 청소ㅋ');
        }
        private grindBeans(shots: number) {
            console.log('전달받은 shots 만큼 그라운딩 되는중');
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOW) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOW;
        }
        private preheat(): void {
            console.log('커피 데우는중 ㅋ');
        }
        private extract(shots: number): CoffeeCup {
            console.log('shots 만큼 커피 내리는중');
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // extends 로 상속 받을 class 의 생성자 constructor() 가 
    // public 이거나 protected 여야함
    class CaffeLatteMachine extends CoffeeMachine {
        // 자식 클래스에서 생성자를 추가 하고 싶으면
        // 무조건 부모 클래스의 생성자도 호출 해야함
        // 별도로 함수 호출이 아닌 super 로 호출 가능
        constructor(beans: number, private coffeeName: string) {
            super(beans)
        }
        // overwring
        // 자식 클래스에서 부모클래에 있는 함수를 덮어 씌우는것
        private steamMilk() {
            console.log('milk');
        }
        makeCoffee(shots: number): CoffeeCup {
            // supuer
            // 상속하는 부모에 있는 함수를 호출가능
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }
}