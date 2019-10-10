import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../core/_services/register/register.service';
import { ICountry } from '../core/_models/register/country';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IError } from '../core/_models/error/error';
import { IRegister } from '../core/_models/register/register';
import { ICity } from '../core/_models/register/city';
import { CountryService } from '../core/_services/country/country.service';
import { CityService } from '../core/_services/city/city.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationErrors } from '../shared/_validation/gerneric-validation/validation-errors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries: ICountry[];

  cities: ICity[];

  form: FormGroup;

  errorMessages: IError[] = [];

  register = {} as IRegister;

  formErrors = {};

  validationMessages = {
    clientName: {
      required: 'This Field is Required'
    },
    phone: {
      required: 'This Field is Required'
    },
    mobile: {
      required: 'This Field is Required'
    },
    email: {
      required: 'This Field is Required',
      email: 'Is not a valid Email Address'
    },
    tenant: {
      required: 'This Field is Required'
    },
    address: {
      required: 'This Field is Required'
    },
    country: {
      required: 'This Field is Required'
    },
    city: {
      required: 'This Field is Required'
    }
  };


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private countryService: CountryService,
    private cityService: CityService,
    private spinner: NgxSpinnerService
  ) { }


  ngOnInit() {
    this.getCountries();
    this.form = this.fb.group({
      clientName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tenant: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });

    // When any of the form control value in employee form changes
    // our validation function logValidationErrors() is called
    this.form.valueChanges.subscribe(data => {
      ValidationErrors.logValidationErrors(this.form, this.formErrors, this.validationMessages, this.errorMessages);
    });
  }


  mapFormValues() {

    this.register.clientName = this.form.value.clientName;
    this.register.phone = this.form.value.phone;
    this.register.mobile = this.form.value.mobile;
    this.register.email = this.form.value.email;
    this.register.tenant = this.form.value.tenant;
    this.register.address = this.form.value.address;
    this.register.country = this.form.value.country;
    this.register.city = this.form.value.city;
  }

  submit(): void {
    debugger

    //   this.mapFormValuesToProfileWithPasswordModel();

    // this.userSettingsService.updateProfile(this.profile).subscribe((res: any) => {});
  }




  private getCountries() {

    this.countryService.getCountries().subscribe((response: ICountry[]) => {
      this.countries = response;
    });
  }
  private getCities(id: number) {
    this.spinner.show();
    this.cityService.getCites(id).subscribe((response: ICity[]) => {
      this.cities = response;
    },
      (err) => console.log('Error'),
      () => this.spinner.hide()
    );
  }
}
