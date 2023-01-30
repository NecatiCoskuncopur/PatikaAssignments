import { readFile, writeFile, appendFile, unlink } from "node:fs";

appendFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("employees.json created");

    readFile("employees.json", "utf8", (err, data) => {
      if (err) console.log(err);
      console.log(data);

      writeFile(
        "employees.json",
        '{"name": "Employee 2 Name", "salary": 3000}',
        "utf-8",
        (err) => {
          if (err) console.log(err);
          console.log("employees.json updated");

          unlink("employees.json", (err) => {
            if (err) console.log(err);
            console.log("employees.json deleted");
          });
        }
      );
    });
  }
);
