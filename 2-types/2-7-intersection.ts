{
    /**
     *  Intersection Types : &
     */
    type Student = {
        name: string;
        score: number;
    }
    type Worker = {
        empolyeeId: number;
        work: () => void;
    }
    function internWork(person: Student & Worker) {
        console.log(person.name, person.empolyeeId);
    }
    // Student & Worker type 들을 다 선언해야함
    internWork({
        name: 'ho',
        score: 1,
        empolyeeId: 1,
        work: () => { }
    })
}