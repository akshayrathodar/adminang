import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders,HttpInterceptor,HttpErrorResponse,HttpParams,HttpRequest,HttpEvent,HttpEventType,HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  public Constant = <any>[];
  constructor(private http: HttpClient) { 
    this.Constant['API_END_POINT'] = environment.API_URL
  }

  private extractData(response: any ) {
    return response;
  }

  public SubmiPostFormData(url : string,body : any,options:any) : Promise<any>{
    return this.http
    .post(this.Constant['API_END_POINT']+url,body,options)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  private handleError (error: HttpErrorResponse) {		
    let errMsg = '';
    if (error.error instanceof Error) {
      errMsg = error.message || 'Client-side error occured.'; 
    } else {
      errMsg = error.message || 'Server-side error occured.'; 
    }
    throw error;
  }

  public setTitle( newTitle: string) {
    console.log('hi');
  }


}
