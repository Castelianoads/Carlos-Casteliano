class UserRegister{
  name: string;
  birthDate: Date;
  password: string;
  email: string;
  phone: string;
  isActive!: boolean;
  doc: string;
  
  constructor(name: string, birthDate: Date, phone: string, doc: string, email: string, password: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.phone = phone;
    this.doc = doc;
    this.email = email;
    this.password = password;
  }

  

}


export default UserRegister;