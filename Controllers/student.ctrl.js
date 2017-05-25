const studentService = require("./services/student.service");
const studentValidator = require("./services/student.validator");

const StudentController = {

    create(student) {

        if (studentValidator.validateStudentCreate(student)){
            const response = studentService.create(student);
            return respose;
        } else {
            return 'not valid data';
        }
    }
}


module.exports = StudentController;