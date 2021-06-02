import Sequelize from 'sequelize'
import User from '../app/models/User'
import databaseconfig from '../config/database'

const models = [User] //array com os files do folder models

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseconfig)
        models.map(item => item.init(this.connection))
    }
}

export default new Database();