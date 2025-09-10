import type Role from "./Role";
import type User from "./User";

class UserRoles{
  idUser: string | null;
  user: User;
  idRole: string | null;
  role: Role;

  constructor(idUser: string | null, user: User, idRole: string | null, role: Role) {
    this.idUser = idUser;
    this.user = user;
    this.idRole = idRole;
    this.role = role;
  }
}

export default UserRoles;