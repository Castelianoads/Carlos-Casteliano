import type IAuthenticationRepository from "@/domain/interfaces/IAuthenticationRepository";
import ChangePasswordRequest from "@/domain/models/ChangePasswordRequest";
import type Login from "@/domain/models/Login";
import type User from "@/domain/models/User";
import type UserRegister from "@/domain/models/UserRegister";
import { AxiosConfig } from "@/settings/AxiosConfig";
import { AxiosError, type AxiosResponse } from "axios";

const urlServer = 'https://carloscasteliano.com.br:5000';
const urlEndpoint = `/${urlServer}/Api/v1/Usuario`;

class AuthenticationRepository implements IAuthenticationRepository {

  async hashPasswordAsync(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hash));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  
  logout(): void {
    this.removeCookie('token')
  } 

  isAuthenticated(): boolean {
    if(this.getCookie('token'))
      return true;
    else
      return false;    
  }

  async loginAsync(login: Login): Promise<User | null | string> {
    const loginInput = login;
    loginInput.password = await this.hashPasswordAsync(loginInput.password);
    let response;

    try {
      response = await AxiosConfig.post(`${urlEndpoint}/Login`, loginInput);    
      return response.data; 
    } catch (error) {   
      if(error instanceof AxiosError) {
        if(error.response?.status == 401){
          return error.response.data.detail;
        }
      }
      
      return null;
    }   
  }; 

  async retrievePasswordAsync(user: string): Promise<string | boolean> {
    try {
      const response: AxiosResponse  = await AxiosConfig.post(`${urlEndpoint}/RecuperarSenha?user=${user}`); 
      return response.status === 200 ? true : "Erro ao solicitar recuperação de senha";
    } catch (error) {     
      if(error instanceof AxiosError){
        if(error.response?.status == 204)
          return 'Usuário não encontrado';
        else if(error.response?.status == 422)
          return 'Usuário inválido'
      }
      return "Erro ao solicitar recuperação de senha";
    }   
  }

  async registerAsync(userRegister: UserRegister): Promise<boolean | string> {
    const userRegisterNew = userRegister;
    userRegisterNew.password = await this.hashPasswordAsync(userRegister.password);
    userRegisterNew.doc = userRegisterNew.doc.replace('.', '').replace('-', '');
    userRegisterNew.phone = userRegisterNew.phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
    try {
      const response: AxiosResponse  = await AxiosConfig.post(`${urlEndpoint}`, userRegisterNew); 
      return response.status === 200 ? true : "Erro ao cadastrar";
    } catch (error) {     
      if(error instanceof AxiosError){
        if(error.response?.status == 409)
          return 'Usuário já cadastrado';
        else if(error.response?.status == 422)
          return 'Campos invalidos'
      }
      return "Erro ao cadastrar";
    }   
  }; 

  async resetPasswordAsync(code: string, email: string, newPassword: string): Promise<string | boolean> {
    newPassword = await this.hashPasswordAsync(newPassword);
    try {
      const response: AxiosResponse  = await AxiosConfig.put(`${urlEndpoint}/ResetarSenha?code=${code}&user=${email}`, newPassword); 
      return response.status === 200 ? true : "Erro ao redefinir senha";
    } catch (error) {     
      if(error instanceof AxiosError){
        if(error.response?.status == 204)
          return 'Usuário não encontrado';
        else if(error.response?.status == 422)
          return 'Usuário inválido'
      }
      return "Erro ao redefinir senha";
    }   
  }

  async alterPasswordAsync(user: string, currentPassword: string, newPassword: string): Promise<string | boolean> {
    var currentPasswordHash = await this.hashPasswordAsync(currentPassword);
    var newPasswordHash = await this.hashPasswordAsync(newPassword);
    var changePasswordRequest = new ChangePasswordRequest(newPasswordHash, currentPasswordHash);

    try {
      const response: AxiosResponse  = await AxiosConfig.put(`${urlEndpoint}/AlterarSenha?user=${user}`, changePasswordRequest); 
      return response.status == 200 ? true : false;
    } catch (error) {     
      if(error instanceof AxiosError){
        if(error.response?.status == 204)
          return 'Usuário não encontrado';
        else if(error.response?.status == 422)
          return 'Usuário inválido'
      }
      return "Erro ao redefinir senha";
    }   
  }

  setCookie(name: string, data: string): void {    
    const date = new Date();
    date.setMonth(date.getMonth() + 1 );
    const expirationDate = date.toUTCString();

    const cookieOptions = [
      `${name}=${encodeURIComponent(data)}`,
      `path=/`,
      `expires=${expirationDate}`,
      `SameSite=Strict`,
    ];

    document.cookie = cookieOptions.join('; ');
  }

  async confirmAccountAsync(email: string, code: string): Promise<boolean | string> {
    try {
      const response = await AxiosConfig.post(`${urlEndpoint}/ConfirmarEmail?email=${email}&code=${code}`); 
      return response.data.status == 200 ? true : "Erro ao confirmar conta";
    } catch (error) {
      if(error instanceof AxiosError){
        if(error.response?.status == 204){
          return 'Nao há dados para exibir';
        } else if(error.response?.status == 401){
          return 'Código inválido ou expirado'
        } else if(error.response?.status == 422){
          return 'Campos invalidos'
        }
      }
      
      return "Erro ao confirmar conta";
    }   
  }; 

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    
    return null;
  }

  removeCookie(name: string): void{
    const expirationDate = new Date('2000-01-01').toUTCString();
    document.cookie = `${name}=; expires=${expirationDate}; path=/`;
  }
};

export default AuthenticationRepository;