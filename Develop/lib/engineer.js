var Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)

        this.github = github
    }

    getRole() {
        return 'engineer'
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer