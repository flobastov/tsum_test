import {Injectable} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Injectable()
export class ValidatorService {

  constructor() {
  }

  private markAsTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control: AbstractControl) => {
        if (control instanceof FormGroup) {
          this.markAsTouched(form);
        } else {
          control.markAsTouched();
        }
    });
  }

  public validateForm(form: FormGroup): boolean {
    this.markAsTouched(form);
    return form.valid;
  }

  public hasError(control: AbstractControl) {
    return control.touched && control.invalid;
  }

  public getErrors(control: AbstractControl): string[] {
    let errors: string[] = [];
    if (Array.isArray(control.errors)) {
      errors = control.errors;
    } else {
      Object.keys(control.errors).forEach(error => {
        switch (error) {
          case 'required':
            errors.push('Поле обязательно для заполнения');
            break;
          case 'min':
            errors.push(`Значение поля не должно быть меньше, чем ${control.errors[error].min}`);
            break;
          case 'email':
            errors.push('Значение поля не соответсвует формату Email');
            break;
          default:
            errors.push('Неизвестная ошибка');
            break;
        }
      });
    }
    return errors;
  }

}
