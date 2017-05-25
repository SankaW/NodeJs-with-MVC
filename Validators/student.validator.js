const studentValidator = {

    validateStudentCreate (student) {

        if (student.studentname && student.studentLocation) {
            return true;
        } else {
            return false;
        } 
    }
}

module.exports = studentValidator;