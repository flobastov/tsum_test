import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {GENDERS} from '../../shared/constants/genders';
import {MARITAL_STATUSES} from '../../shared/constants/marital-statuses';

@Injectable()
export class ResumeMockService {

  public _dependencies: any = null;

  constructor() {
    this.dependencies = of({
      genders: GENDERS,
      maritalStatuses: MARITAL_STATUSES
    });
  }

  get dependencies() {
    return this._dependencies;
  }

  set dependencies(dependencies: any) {
    this._dependencies = dependencies;;
  }

}
