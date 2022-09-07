import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  flagSubmited = false
  message: string
  registrFlag = false

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'You must be logged in to go to the page. Please enter data'
      } else if (params['authFailed']) {
        this.message = 'The session has timed out, please re-enter the data.'
      } else if(params['registered']) {
        this.registrFlag = true;
        this.message = 'You have successfully registered, you can log in'
          setTimeout( () => {
            this.message = null
          }, 10000)
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)])
    })
  }

  submit() {
    // this.alert.error('You entered an invalid email');
    if (this.form.invalid) {
      return
    }
    this.flagSubmited = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
      this.flagSubmited = false
    }, () => {
      this.flagSubmited = false
    })
  }


}
