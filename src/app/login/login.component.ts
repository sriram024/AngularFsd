import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  // returnUrl: string;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private route: ActivatedRoute,
  //   private router: Router,
  // ) {
  //   }

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });

  //   // get return url from route parameters or default to '/'
  //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  // }

  // // convenience getter for easy access to form fields
  // get f() {
  //   return this.loginForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   // reset alerts on submit

  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   // this.loading = true;
  //   // this.authenticationService
  //   //   .login(this.f.username.value, this.f.password.value)
  //   //   .pipe(first())
  //   //   .subscribe(
  //   //     (data) => {
    // if(type==administrator)
  //   //       this.router.navigate([administrator]);
  //   //     },
  //   //     (error) => {
  //   //       this.loading = false;
  //   //     }
  //     // );
  // }
}
