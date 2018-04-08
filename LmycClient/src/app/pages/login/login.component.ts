// import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { QuestionControlService } from '../../components/questions/question-control.service';
import { QuestionsService } from '../../components/questions/questionsService.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../../components/dynamic-form/dynamic-form.component.html',
  styleUrls: ['../../components/dynamic-form/dynamic-form.component.css'],
  providers: [QuestionsService, QuestionControlService]
})

export class LoginComponent implements OnInit {

    questions: any[];
	form: FormGroup;
    title = "Please Login"
	textButton = "Next"

	constructor(
		// private authService: AuthService,
		private router: Router,
		private qcs: QuestionControlService,
		private QuestionsService: QuestionsService
	) {
		this.questions = QuestionsService.getLoginQuestions();
	}

	ngOnInit() {
		this.form = this.qcs.toFormGroup(this.questions);
		console.log('Login form loaded!');
	}

	save(form: any): boolean {
		if (!this.form.valid) {
			return false;
		}

		console.log(this.form.value)
		return true;
	}

	buttonOnClick() {
		if (this.save(this.form)) {
            console.log("Login form saved")
		}
	}

}
