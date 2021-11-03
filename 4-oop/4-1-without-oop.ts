{

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    const BEANS_GRAMM_PER_SHOW: number = 7;
    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {

        // 보유한 커피콩 < 샷 * 커피를 만드는데에 필요한 양 
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOW) {
            throw new Error("Not enough coffee beans!");
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOW;
        return {
            shots,
            hasMilk: false,
        }
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOW;
    const coffee = makeCoffee(2);
    console.log(coffee);


}