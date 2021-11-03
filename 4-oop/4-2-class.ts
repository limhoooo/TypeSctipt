{

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOW: number = 7; // class level
        coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        makeCoffee(shots: number): CoffeeCup {

            // 보유한 커피콩 < 샷 * 커피를 만드는데에 필요한 양 
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOW) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOW;
            return {
                shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);


}