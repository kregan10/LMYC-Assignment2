import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextQuestion } from './question-textbox';

import { FormData } from '../../models/signUpFormData'

@Injectable()
export class QuestionsService {

	private formData: FormData = new FormData();
	private islFormDataValid: boolean = false;

	// Todo: get from a remote source of question metadata
	// Todo: make asynchronous
	getRegisterQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'firstName',
				label: 'First name',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'lastName',
				label: 'Last name',
				required: true,
				order: 2
			}),

			new TextQuestion({
				key: 'userName',
				label: 'Username',
				required: true,
				order: 3
			}),

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 4
			}),

			new TextQuestion({
				key: 'password',
				label: 'Password',
				type: 'password',
				required: true,
				order: 5
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	getLoginQuestions() {

		let questions: QuestionBase<any>[] = [

			new TextQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				required: true,
				order: 1
			}),

			new TextQuestion({
				key: 'password',
				label: 'Password',
				type: 'password',
				required: true,
				order: 2
			}),

		];

		return questions.sort((a, b) => a.order - b.order);
	}

	// getPersonal(): Personal {
	// 	// Return the Personal data
	// 	var personal: Personal = {
	// 		firstName: this.formData.firstName,
	// 		lastName: this.formData.lastName,
	// 		email: this.formData.email
	// 	};
	// 	return personal;
	// }
	//
	// setPersonal(data: Personal) {
	// 	// Update the Personal data only when the Personal Form had been validated successfully
	// 	this.isPersonalFormValid = true;
	// 	this.formData.firstName = data.firstName;
	// 	this.formData.lastName = data.lastName;
	// 	this.formData.email = data.email;
	// }
	//
	// resetFormData(): FormData {
	// 	// Return the form data after all this.* members had been reset
	// 	this.formData.clear();
	// 	this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
	// 	return this.formData;
	// }
	//
	// isFormValid() {
	// 	// Return true if all forms had been validated successfully; otherwise, return false
	// 	return this.isPersonalFormValid &&
	// 			this.isWorkFormValid &&
	// 			this.isAddressFormValid;
	// }
}
