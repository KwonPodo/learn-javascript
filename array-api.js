// Quiz 01. make a string out of an array
const fruits = ['apple', 'banana', 'orange']
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join());

// Quiz 02. make an array out of a string
const fruitString = 'apple, kiwi, bannana, cherry';
const fruitArr = fruitString.split(',');
console.log(fruitArr);

// Quiz 03. make this array look like this: [ 1, 2, 3, 4, 5] -> [ 5, 4, 3, 2, 1 ]
const numArr = [1, 2, 3, 4, 5];
numArr.reverse();
console.log(numArr);

// Quiz 04. make new array without the first two elements
numArr.reverse();
console.log(numArr);
const newNumArr = numArr.slice(2);
console.log(newNumArr);


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
console.log(students);

// Quiz 05. find a student with the score 90

// students.forEach((student, index, students) => {
//     if (student.score === 90) {
//         console.log(students[index]);
//     }
// });
console.log(students.find((student) => student.score === 90)); // 첫번째 90점만 식별된다


// Quiz 06. make an array of enrolled students
const enrolledStudents = students.filter((student) => student.enrolled);
console.log(enrolledStudents);

// Quiz 07. make an array containing only the students' scores

// const scoreArr = [];
// for (let student of students) {
//     scoreArr.push(student.score);
// }
// console.log(scoreArr);
scoreArr = students.map((student) => student.score);
console.log(scoreArr);

// Quiz 08. check if there is a student with the score lower than 50
console.log(students.some((student) => student.score < 50));
console.log(!students.every((student) => student.score >= 50))

// Quiz 09. compute students' average score  ??
// const sum = students.reduce((accumulator, currentStudentScore, i, students) => {
//     currentStudentScore = students[i].score;
//     return accumulator + currentStudentScore;
// }, 0);

const sum = students.reduce((prev, curr) => {
    console.log('------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
}, 0)

console.log(students);
console.log(sum);
const average = sum / students.length;

console.log(average);

// Quiz 10. make a string containing all the scores
const allScores = students
    .map(student => student.score)
    // .filter(score => score >= 50)    --> filter scores over 50
    .join();

console.log(allScores);

// Bonus! do Quiz10 sorted in ascending order

// scoreArr.sort((a, b) => a - b);
// console.log(scoreArr.toString());

const ascendSort = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();

console.log(ascendSort);