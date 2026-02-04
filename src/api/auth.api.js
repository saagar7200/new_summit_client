import api from ".";

export const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response
  }
};


// register
export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response
  }
};

// get user detail
export const getUserDetail = async() =>{
  try {
    const  response = await api.get('/auth/user-detail')
    return response.data 
  } catch (error) {
    console.log(error)
    throw error.response   
  }
}
