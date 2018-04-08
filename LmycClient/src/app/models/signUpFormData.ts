export class FormData {
	firstName: string = '';
	lastName: string = '';
	userName: string = '';
	email: string = '';
	password: string = '';

	street: string = '';
	city: string = '';
	province: string = '';
	postalCode: string = '';
	country: string = '';

	mobilePhone: string = '';

	emergencyContactOnePhone: string = '';
	emergencyContactTwoPhone: string = '';

	sailingExperience: string = '';

	clear() {
		this.firstName = '';
		this.lastName = '';
		this.userName = '';
		this.email = '';

		this.street = '';
		this.city = '';
		this.province = '';
		this.country = '';
		this.postalCode = '';

		this.mobilePhone = '';

		this.sailingExperience = '';

	}
}
