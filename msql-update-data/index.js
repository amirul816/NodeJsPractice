var mysql = require("mysql");
var DatabaseConnectionConfig = { host: "localhost",user: "root",password: "",database: "school"};
var con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function (error) {
  if (error) {
    console.log("Connection Fail");
  } else {
    console.log("Successfully Connected");
    //InsertData(con);
    // DeleteDataByID(con);
    //UpdateData(con);
    SelectData(con)
  }
});

function InsertData(con) {
  let SQLQuery =
    "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Soha khan','06','Three','01722914201','Boalia Bazar')";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data insert fail");
    } else {
      console.log("Data insert success");
    }
  });
}

function DeleteDataByID(con) {
  let SQLQuery = "DELETE FROM `students_list` WHERE `id`= '4'";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data delete failed");
    } else {
      console.log("Data delete done");
    }
  })
}

function UpdateData(con){
  let SQLQuery =
    "UPDATE `students_list` SET `phone`='444444444',`city`='Rajshahi' WHERE `id`= '5' ";
  con.query(SQLQuery, function (error) {
    if (error) {
      console.log("Data update failed");
    } else {
      console.log("Data update Success ");
    }
  });

}
function SelectData(con){
  let SQLQuery ="SELECT * FROM `students_list`";
  con.query(SQLQuery, function (error,result) {
    if (error) {
      console.log("Data Select failed");
    } else {
      console.log(result);
    }
  });

}
