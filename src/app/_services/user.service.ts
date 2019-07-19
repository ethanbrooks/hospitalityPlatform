import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserDetail, UserMailboxes } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    private currentUserDetailDataSubject: BehaviorSubject<UserDetail>;
    public currentUserDetailData: Observable<UserDetail>;
    public userDetailData: Observable<UserDetail>;

    private currentUserMailboxesDataSubject: BehaviorSubject<UserMailboxes>;
    public currentUserMailboxesData: Observable<UserMailboxes>;
    public userMailboxesData: Observable<UserMailboxes>;

    constructor(
        private httpClient: HttpClient
    ) {
        this.currentUserDetailDataSubject = new BehaviorSubject<UserDetail>( JSON.parse(localStorage.getItem('currentUserDetail')));
        this.userDetailData = this.currentUserDetailDataSubject.asObservable();

        this.currentUserMailboxesDataSubject = new BehaviorSubject<UserMailboxes>( JSON.parse(localStorage.getItem('currentUserMailboxes')));
        this.userMailboxesData = this.currentUserMailboxesDataSubject.asObservable();
    }


    public get currentUserDetail(): UserDetail {
        return this.currentUserDetailDataSubject.value;
    }

    public get currentUserMailboxes(): UserMailboxes {
        return this.currentUserMailboxesDataSubject.value;
    }

    getUserDetail(user) {
        return this.httpClient.get<UserDetail>('/api/users/' + user).subscribe(userDetailResponse => {
            localStorage.setItem('currentUserDetail', JSON.stringify(userDetailResponse));
            this.currentUserDetailDataSubject.next(userDetailResponse);
            return userDetailResponse;
          });
    }

    getUserMailboxes(user) {
        return this.httpClient.get<UserMailboxes>('/api/users/' + user + '/mailboxes').subscribe(userMailboxesResponse => {
                localStorage.setItem('currentUserMailboxes', JSON.stringify(userMailboxesResponse));
                this.currentUserMailboxesDataSubject.next(userMailboxesResponse);
                return userMailboxesResponse;
          });
    }
}
