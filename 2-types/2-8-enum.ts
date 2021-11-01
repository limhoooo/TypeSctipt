{
    /**
    * Enum
    */

    // JavaScript
    const MAx_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDEAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({
        "MONDEAY": 0,
        "TUESDAY": 0,
        "DAYS_ENUM": 0,
    })

    // TypeScript
    // 값을 지정하지않으면 자동으로 인덱스가 value가 됨
    enum Days {
        Monday = 'monday', // 0
        Tuesday = 'Tuesday', // 1
        Wednesday = 'Wednesday', // 2
        Thursday = 'Thursday', // 3
        Friday = 'Friday', // 4
        Saturday = 'Saturday', // 5
        Sunday = 'Sunday' // 6
    }
    let day: Days = Days.Saturday;
    day = Days.Thursday;
    // day = 10;
    console.log(day);

    // 유니온 타입을 많이쓴다고함
    type DaysWeek = 'Monday' | 'Tuesday' | 'Wednesday'
    let dayOfweek: DaysWeek = 'Tuesday';
    dayOfweek = 'Wednesday';
}