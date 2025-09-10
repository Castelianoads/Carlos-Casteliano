import type UserRoles from "./UserRoles";

class Role{
  id: string | null;
  name: string | null;
  userRoles: UserRoles[];   

  constructor(id: string | null, name: string | null, userRoles: UserRoles[]) {
    this.id = id;
    this.name = name;
    this.userRoles = userRoles;
  }
}

export default Role;