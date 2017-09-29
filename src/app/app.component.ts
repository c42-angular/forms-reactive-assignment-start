import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  theForm: FormGroup;

  onFormSubmit() {
    console.log(this.theForm);
  }

  ngOnInit(): void {
    this.theForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'projectMail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }
}
