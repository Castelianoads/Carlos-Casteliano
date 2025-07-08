
class User{
  id: string;
  name: string;
  birthDate: Date;
  isActive: boolean;
  isEmailConfirmed: boolean;
  isPhoneConfirmed: boolean;

  constructor(id: string, name: string, birthDate: Date, isActive: boolean, isEmailConfirmed: boolean, isPhoneConfirmed: boolean) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.isActive = isActive;
    this.isEmailConfirmed = isEmailConfirmed;
    this.isPhoneConfirmed = isPhoneConfirmed;
  }
}

export default User;