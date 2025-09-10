import type Role from "./Role";

class User{
  id: string;
  name: string;
  birthDate: Date;
  phone: string;
  doc: string;
  email: string;
  isActive: boolean | null;
  isEmailConfirmed: boolean | null;
  isPhoneConfirmed: boolean | null;
  dataRegister: Date | null;
  role: Role[];
  token: string | null;

  constructor(id: string, name: string, birthDate: Date, dataRegister: Date, token: string | null,
    phone: string, doc: string, email: string, isActive: boolean, isEmailConfirmed: boolean, isPhoneConfirmed: boolean, role: Role[]
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.dataRegister = dataRegister;
    this.phone = phone;
    this.doc = doc;
    this.token = token;
    this.email = email;
    this.isActive = isActive;
    this.isEmailConfirmed = isEmailConfirmed;
    this.isPhoneConfirmed = isPhoneConfirmed;
    this.role = role;
  }

  toString(): string {
    return `
      User {
        id: ${this.id}, 
        name: ${this.name}, 
        birthDate: ${this.birthDate}, 
        phone: ${this.phone}, 
        doc: ${this.doc}, 
        email: ${this.email}, 
        isActive: ${this.isActive}, 
        isEmailConfirmed: ${this.isEmailConfirmed}, 
        isPhoneConfirmed: ${this.isPhoneConfirmed}, 
        dataRegister: ${this.dataRegister?.toString()}, 
        role: ${JSON.stringify(this.role)}
        token: ${this.token}
      }
    `;
  }
}

export default User;