import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';
import {Observable, of} from 'rxjs';
import * as moment from 'moment';

const ADULT_AGE: Number = 18;

@Injectable()
export class ResumeService {

  private _user: User = null;

  constructor() {
  }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  public sendData(data: User): Observable<boolean> {
    this.user = data;
    return of(true);
  }

  public hasAdulthood(birthday: Date): Boolean {
    let result: Boolean = false;
    if (birthday) {
      result = moment().diff(moment(birthday), 'years') >= ADULT_AGE;
    }
    return result;
  }

}
