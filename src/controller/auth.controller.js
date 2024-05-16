const {
    loginService,
  } = require('../services/auth.services');
const UsersSchema = require('../mongoDB/model/user')


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const { token } = req.params;
      const data = await loginService(email.toLowerCase(), password, token);
  
      return res.status(data.status ? 200 : 500).json(data);
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: error,
      });
    }
};

const addUserDetails = async (userData) => {
  const existingUser = await UsersSchema.findOne({ email: userData.email });
    
  if (existingUser) {
      throw new Error("User with this email already exists.");
  }
    const user = new UsersSchema(userData);
    const data = await user.save();
    return data;
  };

const signup = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);
        await addUserDetails(userData);

        return res.status(200).json({
          status: "success"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error,
          });
    }
}

module.exports = { login, signup };