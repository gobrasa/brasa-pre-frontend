export class Exam {
    constructor(
      public category: string,
      public subcategory: string,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }