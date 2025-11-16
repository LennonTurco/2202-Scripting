/**
 * Define the Course and Assignment concepts using the class notations
 */

// class representing a single assignment in a course
class Assignment{
    // runs when new assinment is called with parameters
    // does the prototype work like before but constructor becomes the fxn with new assignment()
    // and print assignment is automatically stored on the assignment.prototype
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    // method to print assinment line out
    printAssignment(){
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

// class representing course with its assignments
class Course{
    constructor(courseName, instructor, creditHours, assignments){
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    // holds array of assignment objects
    this.assignments = assignments;
    }

    //method to print the course info and its assignments
    courseInfo(){
        console.log(
            'Course: ' + this.courseName +
            ' | Instructor: ' + this.instructor +
            ' | Credit Hours: ' + this.creditHours
        );
        console.log('Assignments >>>');
        // loop over this courses assignments and ask each to print itself
        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}

// was from starter file
// create the objects using the classes

let c1; 
let c2;

// create assignment objects with the assignment constructor
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// create course objects with course constructor and assign them to c1/c2 variables
c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);
c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

// these calls were in starter
// again, will print out the same output as in plainObjects
c1.courseInfo();
c2.courseInfo();
