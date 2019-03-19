export class User {
    constructor(
      public username: string,
      public role_name : string,
      public _id?: number,
      public email?: string,
      public password_hash?: string,
      public authenticated?: boolean,
    ) { }
  }