import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ResumeService} from '../resume.service';
import {ResumeMockService} from '../resume-mock.service';
import {Reference} from '../../../shared/models/reference';
import {ValidatorService} from '../../../core/services/validator.service';

const MAX_ATTEMPTS = 3;
const DISABLE_INTERVAL = 10000;

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss']
})
export class ResumeEditComponent implements OnInit {

  private static counter = 0;
  public form: FormGroup;
  public genders: { [key: string]: Reference };
  public maritalStatuses: { [key: string]: Reference[] };
  public disableStateForm: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ResumeService,
    private mock: ResumeMockService,
    private router: Router,
    private validator: ValidatorService
  ) {
    mock.dependencies.subscribe(dependencies => {
      this.genders = dependencies.genders;
      this.maritalStatuses = dependencies.maritalStatuses;
    });
  }

  ngOnInit() {
    this.buildForm();
    this.setValidators();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      birthday: [null, Validators.required], // TODO::format DD.MM.YYYY
      maritalStatus: [null],
      childrenCount: [null, Validators.min(0)],
      email: [null, [Validators.required, Validators.email]],
      comment: [null]
    });
  }

  private setValidators(): void {
    const maritalStatus = this.form.get('maritalStatus') as FormControl;
    const birthday = this.form.get('birthday') as FormControl;
    const gender = this.form.get('gender') as FormControl;
    gender.valueChanges.subscribe(() => maritalStatus.setValue(null));
    birthday.valueChanges.subscribe((value: Date) => {
      if (!this.service.hasAdulthood(value)) {
        maritalStatus.clearValidators();
        maritalStatus.setValue(null);
        maritalStatus.setErrors(null);
      } else {
        maritalStatus.setValidators([Validators.required]);
      }
    });
  }

  public showMaritalStatusField(): boolean {
    const birthday = this.form.get('birthday') as FormControl;
    const gender = this.form.get('gender') as FormControl;
    return this.service.hasAdulthood(birthday.value) && gender.value;
  }

  public submit(): void {
    console.log(this.form);
    ResumeEditComponent.counter += 1;
    if (this.validator.validateForm(this.form)) {
      ResumeEditComponent.counter = 0;
      const formData = this.form.getRawValue();
      this.service.sendData(formData).subscribe((status: boolean) => {
        if (status) {
          return this.router.navigateByUrl('resume/view');
        }
      }, (error) => {
        console.error(error);
      });
    } else {
      if (ResumeEditComponent.counter === MAX_ATTEMPTS) {
        ResumeEditComponent.counter = 0;
        this.form.reset();
      }
      this.disableForm();
    }
  }

  private disableForm(): void {
    this.disableStateForm = true;
    setTimeout(() => {
      this.disableStateForm = false;
    }, DISABLE_INTERVAL);
  }

}
