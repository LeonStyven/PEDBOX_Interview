import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/User.interface"
import { UserLogin } from "../login/interfaces/user-login-interface";

@Injectable({
    providedIn: 'root'
})

export class AccessService {
    private http = inject(HttpClient);
    private API_URL = "http://127.0.0.1:4000/";

    constructor() { }

    register(user: User): Observable<any> {
        const url = `${this.API_URL}auth/signin`;
        return this.http.post<any>(url, user);
    }

    login(user: UserLogin): Observable<any>{
        const url = `${this.API_URL}auth/login`; 
        return this.http.post<any>(url, user);
    }
}