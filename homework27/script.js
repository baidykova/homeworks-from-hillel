class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const nextEmptyIndex = this.attendance.indexOf(null);
    if (nextEmptyIndex !== -1) {
      this.attendance[nextEmptyIndex] = true;
    }
  }

  absent() {
    const nextEmptyIndex = this.attendance.indexOf(null);
    if (nextEmptyIndex !== -1) {
      this.attendance[nextEmptyIndex] = false;
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return null;
    }
    
    const sum = this.grades.reduce((partialSum, element) => partialSum + element);
    return sum / this.grades.length;
  }

  getAttendancePercentage() {
    const numPresent = this.attendance.filter(element => element === true).length;
    return numPresent / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendancePercent = this.getAttendancePercentage();
    if (averageGrade === null || attendancePercent === null) {
      return "Оцінки чи відвідуваність ще не зареєстровані.";
    } else if (averageGrade > 90 && attendancePercent > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercent > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Ivan", "Sirov", 2006);
const student2 = new Student("Oleg", "Vakulenko", 2012);
const student3 = new Student("Iryna", "Melnichuk", 2007);

student1.grades = [99, 97, 99];
for(let i = 0; i < 25; i++) {
  student1.present();
}
console.log(`${student1.firstName} ${student1.lastName} вік: ${student1.getAge()}`); 
console.log(student1.summary());

student2.grades = [90, 92, 94];
student2.present();
student2.present();
student2.absent();
console.log(`${student2.firstName} ${student2.lastName} вік: ${student2.getAge()}`); 
console.log(student2.summary()); 

student3.grades = [88, 73, 82];
student3.absent();
student3.present();
student3.present();
console.log(`${student3.firstName} ${student3.lastName} вік: ${student3.getAge()}`); 
console.log(student3.summary());