class ChangePasswordRequest{
  newPassword: string;
  currentPassword: string;

  constructor(newPassword: string, currentPassword: string) {
    this.newPassword = newPassword;
    this.currentPassword = currentPassword;
  }
}

export default ChangePasswordRequest;