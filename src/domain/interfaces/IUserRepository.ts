import type User from "../models/User";

export default interface IUserRepository {
  GetByIdAsync(id: string): Promise<User>;
  IncludeAsync(user: User): Promise<boolean>;
  AlterAsync(id: string, user: User): Promise<boolean>;
  DeleteAsync(id: string): Promise<boolean>;
  resendConfirmationEmailAsync(email: String) : Promise<boolean>;
}