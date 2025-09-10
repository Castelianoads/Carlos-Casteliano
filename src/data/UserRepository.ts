import type IUserRepository from "@/domain/interfaces/IUserRepository";
import type User from "@/domain/models/User";
import { AxiosConfig } from "@/settings/AxiosConfig";


const urlServer = 'https://carloscasteliano.com.br:5000';
const urlEndpoint = `/${urlServer}/Api/v1/Usuario`;

class UserRepository implements IUserRepository {
  
  async resendConfirmationEmailAsync(email: String): Promise<boolean> {
    const response = await AxiosConfig.post(`v1/Usuario/ReenviarConfirmacaoEmail?email=${email}`);
    return response.data;
  }

  async GetByIdAsync(id: string): Promise<User> {
    const response = await AxiosConfig.get(`${urlEndpoint}/${id}`);
    return response.data;
  };

  async IncludeAsync(user: User): Promise<boolean> {
    const response = await AxiosConfig.post(`${urlEndpoint}`, user);
    return response.data;
  };

  async AlterAsync(id: string, user: User): Promise<boolean> {
    const response = await AxiosConfig.put(`${urlEndpoint}/${id}`, user);
    return response.status == 200 || response.data.status == 200 ? true : false;
  };

  async DeleteAsync(id: string): Promise<boolean> {
    const response = await AxiosConfig.delete(`${urlEndpoint}/${id}`);
    return response.data;
  };
};

export default UserRepository;