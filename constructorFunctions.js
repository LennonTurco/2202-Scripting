/**
 * Define the Course and Assignment concepts using the constructor functions
 */

// constructor for asignment objects
// used as a blueprint for creating many instances of assingment 
function Assignment(title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
}


// define print function for assignment
function printAssignment() {
    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
} // note "this" is an assingment object here
// hooking it onto the assignment prototype so that all instances share it
Assignment.prototype.printAssignment = printAssignment; // attaches any new assignment obejcts with the shared print method

// constructor for course objects
function Course(courseName, instructor, creditHours, assignments){
    // properties that match the ones used in plainObjects
    this. courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    // holds array of assignment objects
    this.assignments = assignments;
};

// shared method for all course objects
// same logic as in courseInfo function within plainObjects
Course.prototype.courseInfo = function () {
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
};

// create the objects using the constructor functions

// these were from starter file
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

// these calls were from starter file
// will print out the same output as in plainObjects
c1.courseInfo();
c2.courseInfo();

