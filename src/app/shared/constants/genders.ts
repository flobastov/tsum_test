import {Reference} from '../models/reference';

export const GENDERS: {[key: string]: Reference} = {
  male: {alias: 'male', title: 'Мужской'},
  female: {alias: 'female', title: 'Женский'},
};
