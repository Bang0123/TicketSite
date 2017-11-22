import { Injectable, Inject } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TicketService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private authenticationService: AuthenticationService
  ) { }

  getTickets() {
    return this.http.get(this.baseUrl + '/api/tickets', {
      headers: this.authenticationService.getAuthorizationHeader()
    });
  }

  getcriticalAmount() {
    return this.http.get(this.baseUrl + '/api/tickets/criticalamount', {
      headers: this.authenticationService.getAuthorizationHeader()
    });
  }

  getOpenAmount() {
    return this.http.get(this.baseUrl + '/api/tickets/openamount', {
      headers: this.authenticationService.getAuthorizationHeader()
    });
  }

  getAssigneesTickets() {
    return this.http.get(
      this.baseUrl + '/api/tickets/assignee/' + this.authenticationService.getUser().userName, {
        headers: this.authenticationService.getAuthorizationHeader()
      });
  }

  getAssigneesTicketsAmount() {
    return this.http.get(
      this.baseUrl + '/api/tickets/assigneeamount/' + this.authenticationService.getUser().userName, {
        headers: this.authenticationService.getAuthorizationHeader()
      });
  }

  getAmountOfNewTickets() {
    return this.http.get(this.baseUrl + '/api/tickets/newamount', {
      headers: this.authenticationService.getAuthorizationHeader()
    });
  }
}
