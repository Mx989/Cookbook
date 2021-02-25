import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class LoginService {
    currentUser = new BehaviorSubject<User>(null);
    
    constructor(
        private http: HttpClient
    ) {}
 
    
    username = 'Test';
    password = 'Testpass'
    apiUrl = 'https://localhost:44324/';

    login(username: string, password: string): Observable<User> {
        var data = {
            Username: username,
            Password: password
        }
        return this.http.post<User>(this.apiUrl + "Users/Login", data).pipe(tap(resData=> {
            const user = resData;
            this.currentUser.next(user);
        }));
    }

    signup(username: string, email: string, password: string): Observable<User> {
        var data = {
            Username: username,
            EmailAddress: email,
            Password: password
        }
        return this.http.post<User>(this.apiUrl + "Users/AddUser", data);
        //TODO this is not returnig token now
    }

    logout() {
        this.currentUser.next(null);
    }
}