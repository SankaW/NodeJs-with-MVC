var msSqlService = require("mssql");
let StudentService = {

    create(student) {
        msSqlService.connect(config, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            var sqlinsert = "INSERT INTO Student (StudentName) VALUES ('" + student.studentname + "')";
            request.query(sqlinsert, function (err) {
                if (err) console.log(err)
                sql.close();
                return "Student saved !";
            });
        });
    }
};


module.exports = StudentService;