import axios from "./api";

const authService = {
  registerUser: async (user) => {
    console.log(user);
    const data = await axios.post("/users/create_user", { user });
    return data;
  },

  //   loginUser: async (user) => {
  //     const { data } = await axios.post("/users/login", { user });
  //     return data;
  //   },

  //   getUser: async () => {
  //     const { data } = await axios.get("/user");
  //     return data;
  //   },
};

export default authService;
