
export class LoginResponse {
  public performRedirect: boolean;
  public returnUrl: string;

  constructor(props: any) {
    this.performRedirect = props.performRedirect;
    this.returnUrl = props.returnUrl;
  }

}
