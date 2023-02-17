const { Pasien } = require('../models');
const { generateToken } = require('../helper/jwt');

class PasienController {
  // ! PASIEN LOGIN
  static async pasienRegister(req, res){
    try {
      const {
        nama,
        jenis_kelamin,
        umur,
        alamat,
        email,
        password
      } = req.body;
      const role = "pasien";

      await Pasien.create({
        nama,
        jenis_kelamin,
        umur,
        alamat,
        role,
        email,
        password
      });

      return res.status(201).json({
        nama,
        jenis_kelamin,
        umur,
        alamat,
        role,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // ! PASIEN LOGIN
  static async pasienLogin(req, res){
    try {
      const {email, password} = req.body;
      const pasienAccount = await Pasien.findOne({
        where: {
          email
        },
      });
      if(!pasienAccount){
        return res.status(404).json({
          message: "User not found"
        });
      } else {
        const compare = password == pasienAccount.password;
        if(!compare){
          return res.status(400).json({
            message: "Password is wrong"
          })
        }
        const token = generateToken({
          id: pasienAccount.id,
          email: pasienAccount.email,
          role: pasienAccount.role
        })
        return res.status(200).json({
          token: token
        })
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = PasienController;