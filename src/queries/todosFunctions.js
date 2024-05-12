import axiosInstance from "../service/interceptor";

export const ListTodos = async (params) => {
  try {
    const response = await axiosInstance.get("/todo/todo", { params });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const UpdateTodos = async (data) => {
  try {
    const response = await axiosInstance.put(`/todo/todo/${data.id}`, data);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const CreateTodos = async (data) => {
  try {
    const response = await axiosInstance.post("/todo/todo", data);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const DeleteTodos = async (id) => {
  try {
    const response = await axiosInstance.delete(`/todo/todo/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
