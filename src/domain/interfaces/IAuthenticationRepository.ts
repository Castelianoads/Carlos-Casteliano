import type Login from "../models/Login"
import type User from "../models/User"
import type UserRegister from "../models/UserRegister"

export default interface IAuthenticationRepository {
  loginAsync(login: Login): Promise<User | null | string>
  registerAsync(userRegister: UserRegister): Promise<boolean | string>
  retrievePasswordAsync(user: string): Promise<boolean | string>
  resetPasswordAsync(code: string, email: string, newPassword: string): Promise<boolean | string>
  alterPasswordAsync(user: string, currentPassword: string, newPassword: string): Promise<boolean | string>
  logout(): void
  isAuthenticated(): boolean
  setCookie(name: string, data: string): void
  getCookie(name: string): string | null
  removeCookie(name: string): void
  hashPasswordAsync(password: string): Promise<string>
  confirmAccountAsync(email: string, code: string): Promise<boolean | string>
}