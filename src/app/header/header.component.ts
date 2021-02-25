import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService, private router: Router) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(user => {
      this.currentUser = user;
      if(user !== undefined && user !== null)
      this.isLoggedIn = true;
      else this.isLoggedIn = false;
    });
  }

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['./login']);
  }
}
