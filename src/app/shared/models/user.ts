import {Reference} from './reference';

export class User {
  name: string;
  gender: Reference;
  birthday: Date;
  maritalStatus?: Reference;
  childrenCount?: number;
  email: string;
  comment?: string;

  constructor({name, gender, birthday, maritalStatus, childrenCount, email, comment}) {
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.maritalStatus = maritalStatus;
    this.childrenCount = childrenCount;
    this.email = email;
    this.comment = comment;
  }

}
