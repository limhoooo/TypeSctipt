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
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }
    // public
    // private : 클래스 밖에서는 접근이 안됨
    // protected : 상속받은 클래스에서는 접근 가능함
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOW: number = 7; // class level
        private coffeeBeans: number = 0;
        // 외부에서 접근 X
        private constructor(coffeeBeans: number) {
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
    // 생성자
    // const maker: CoffeeMaker = CoffeeMachine.makeMachine(15);
    // console.log(maker.makeCoffee(2));

    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(15);
    maker2.fillCoffeeBeans(5);
    console.log(maker2.makeCoffee(2));
    maker2.clean()


    class AmteurUser {
        constructor(private machine: CoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(2);
            this.machine.clean()
        }
    }
    // 호출
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(15);
    const amateur = new AmteurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();

}