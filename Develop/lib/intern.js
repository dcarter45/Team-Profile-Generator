var Employee = require('./Employee')

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email)

        this.school = school
    }

    getRole() {
        return 'intern'
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern