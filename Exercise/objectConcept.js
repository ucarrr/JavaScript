let student={
    name:'Ahmet',
    surName:'KARA',
    birthDay:1999,
    statu:true,
    grades:[99,80,70,60],
    totalGrades:0,
    calculateGrades: function(grades){
         for (const i of grades) {
            this.totalGrades+=i;
         }
         return this.totalGrades;
    }


};

console.log(student);

console.log(student.name);

console.log(student['birthDay']);



console.log(student.calculateGrades([99,80,70,60]))