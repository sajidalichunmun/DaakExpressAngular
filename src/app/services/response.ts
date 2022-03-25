export class Response<T>  {
  public errors: Error[];
  public hasErrors: boolean;

  public data: T;

  constructor(body: any) {
    this.hasErrors = body.hasErrors;
    this.errors = body.errors;
    this.data = body.data;
  }
}

