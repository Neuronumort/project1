import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email: string;
password: string;
constructor() { }
ngOnInit() { }
login() {
firebase.auth()
.signInWithEmailAndPassword(this.email, this.password)
.then((data) => {
console.log(data);
console.log(data.user.email);
console.log(data.user.uid);
}).catch((err) => {
console.log(err);
});
}
}