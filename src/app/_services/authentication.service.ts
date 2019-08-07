import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public userAuthenticationData: User;

    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentAuthentication(): User {
//        return this.currentUserSubject.value;
        this.userAuthenticationData = this.currentUserValue;
        return this.userAuthenticationData;
    }


    login(username: string, password: string) {
        return this.httpClient.post<any>('/service/authenticate', { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify(user));
                   this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out

        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    logoutApi(user: string, reason: string) {
        return this.httpClient.put<any>('/api/users/' + user + '/logout', { reason });
    }

}
