import {Reference} from '../models/reference';
import {GENDERS} from './genders';

const commonMaritalStatuses: Reference[] = [
  {alias: 'divorced', title: 'В разводе'},
  {alias: 'nope', title: 'Нет'}
];

export const MARITAL_STATUSES: { [key: string]: Reference[] } = {
  [GENDERS['male'].alias]: [{alias: 'married', title: 'Женат'}, ...commonMaritalStatuses],
  [GENDERS['female'].alias]: [{alias: 'for_husband', title: 'За мужем'}, ...commonMaritalStatuses]
};
