import axios from "./api"

const authService = {
  registerUser: async (user) => {
    const data = await axios.post("users/create_user", user)
    return data
  },

  loginUser: async (user) => {
    const data = await axios.post("token", user, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return data
  },

  getUser: async () => {
    const data = await axios.get("/users/get_own")
    return data
  },

  updateUser: async (user) => {
    const data = await axios.put("/users/update", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return data
  },
}

export default authService
