import api from "."


export const addNewTask = async(data) =>{
    try {

        const response = await api.post('/tasks',data)
        return response.data
        
    } catch (error) {
        throw error.response.data
    }
}


export const editTask = async(id,data) =>{
    try {
        const response = await api.put(`/tasks/${id}`,data)
        return response.data
        
    } catch (error) {
        throw error.response
    }
}


export const getAllTask = async() =>{
    try {
        const response = await api.get(`/tasks`)
        return response.data
        
    } catch (error) {
        throw error.response
    }
}


export const deleteTask = async(id) =>{
    try {
        const response = await api.delete(`/tasks/${id}`)
        return response.data
        
    } catch (error) {
        throw error.response
    }
}



