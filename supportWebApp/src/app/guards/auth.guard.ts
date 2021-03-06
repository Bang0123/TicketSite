import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, flatMap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    private signedIn: boolean;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authenticationService.isSignedIn().pipe(
            map((signedIn: boolean) => { this.signedIn = signedIn; }),
            flatMap(() => this.authenticationService.userChanged().pipe(
                map(() => {
                    const url: string = state.url;
                    if (this.signedIn) {
                        return true;
                    }
                    this.authenticationService.redirectUrl = url;
                    this.router.navigate(['/login']);
                    return false;
                })
            ))
        );
    }
}
