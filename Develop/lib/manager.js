var Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getEmail() {
    return this.email;
  }
}

module.exports = Manager;
