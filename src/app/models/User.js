import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                cpf: Sequelize.STRING,
                telefone: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize
            })

        return this
    }
}

export default User