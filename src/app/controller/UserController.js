import User from '../models/User'

class UserController {

    async index(req, res){
        const all = await User.findAll()
        return res.status(200).json(all)
    }

    async store(req,res){
        const {nome, cpf, telefone, email} = await User.create(req.body)
        return res.status(200).json({nome, cpf, telefone, email})
    }

    async update(req,res){
        const myId = req.params.id 
        const userSelected = await User.findByPk(myId)
        const {nome, cpf, telefone, email} = req.body
        userSelected.nome = nome
        userSelected.cpf = cpf
        userSelected.telefone = telefone
        userSelected.email = email
        const resultadoSave = await userSelected.save()
        return res.status(200).json(resultadoSave)
    }

    async delete(req,res){
        const myId = req.params.id 
        await User.destroy({where: {id: myId} })
        return res.status(200).json({message: 'User deleted'})
    }
}


export default new UserController()