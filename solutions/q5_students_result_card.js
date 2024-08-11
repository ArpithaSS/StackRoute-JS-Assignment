// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
const students=[];
const totalMarks={
    'Grammar and Accounts': 200,
    'Grammar and Physics': 200
};
for(let i=1; i<=100;i++) {
    const student= {};
    student.name=`Student ${i}`;
    if(i<=50) {
        student.subjects='Grammar and Accounts';
        student.grammarScore=80;
        // student.grammarScore=i+10;
        student.accountsScore=70;
        student.totalMarks=totalMarks['Grammar and Accounts'];
        student.obtainedMarks=student.grammarScore+ student.accountsScore;
    }
    else {
        student.subjects='Grammar and Physics';
        student.grammarScore=85;
        student.physicsScore=70;
        student.totalMarks=totalMarks['Grammar and Physics'];
        student.obtainedMarks=student.grammarScore+ student.physicsScore;
    }
    student.percentage=(student.obtainedMarks/student.totalMarks)*100;
    students.push(student);
}
console.log("Result Card");
students.forEach(student=>{
    console.log(`Name: ${student.name},
    Percentage: ${student.percentage}
        `);
})