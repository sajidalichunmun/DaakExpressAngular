export class ResetPasswordRequest {
  resetToken: string;
  username: string;
  resetCode: string;
  newPassword: string;
  confirmPassword: string;

  constructor(props: any) {
    this.resetToken = props.resetToken;
    this.username = props.username;
    this.resetCode = props.resetCode;
    this.newPassword = props.newPassword;
    this.confirmPassword = props.confirmPassword;
  }
}
