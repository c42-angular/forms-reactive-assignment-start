import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  theForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  defaultStatus = '';

  onFormSubmit() {
    console.log(this.theForm);
  }

  ngOnInit(): void {
    this.theForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.userNameCheckAsync),
      'projectMail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  userNameCheckAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        const projectName = control.value;

        if (projectName === 'Test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
}
