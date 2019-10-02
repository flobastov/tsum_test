import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../resume.service';
import {User} from '../../../shared/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  public user: User = null;

  constructor(
    private service: ResumeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.service.user) {
      this.user = this.service.user;
    } else {
      return this.router.navigateByUrl('resume');
    }
  }

}
