// Created: 202X-XX-XX
// Author: YOURNAME
// Last Updated: 202X-XX-XX
// Description: Student class including some methods
class Student {

    constructor(id, fname, lname, dob) {
        // properties
        this.student_id = id;
        this.first_name = fname;
        this.last_name = lname;
        this.birthday = dob;
    }
    
    // return the full name
    full_name() {
        return this.first_name + " " + this.last_name;
    }

    get_age() {
        const today = new Date();
        
        if (today.getMonth() > this.birthday.getMonth()) {
            // past month
            return today.getFullYear() - this.birthday.getFullYear();
        } 
        else if (today.getMonth() == this.birthday.getMonth() && 
                 today.getDate() >= this.birthday.getDate()) {
            // same month but past day
            return today.getFullYear() - this.birthday.getFullYear();
        }
        else{
            // some future date this year so subtract a year
            return today.getFullYear() - this.birthday.getFullYear() - 1;
        }

    }

}  // end of class Student

