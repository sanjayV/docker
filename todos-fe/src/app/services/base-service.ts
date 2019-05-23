import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Injectable()

export class BaseService {
    //global API url
    private SITENAME: string = "https://todo-app-apis.herokuapp.com";

    public constructor(
        public _http: Http
    ) {

    }

    /** method created for get request
    params api_url
    it will accept the api url as parameters
    */
    public getMethod(api_url:string) {
        let fetchUrl = `${this.SITENAME}${api_url}`;
        return this._http.get(fetchUrl)
            .share()
            .map((response: Response)=>response.json())
            .catch(this.handleError);

    }

    /** method created for post request
    params api_url
    params post
    it will accept the api url and body as parameters
    */
    public postMethod(post:any, api_url:string) {
        let fetchUrl = `${this.SITENAME}${api_url}`;

        return this._http.post(fetchUrl, post)
            .map((response: Response)=>response.json())
            .catch(this.handleError);

    }

    /** method created for put request
    params api_url
    params post
    it will accept the api url and body as parameters
    */

    public putMethod(post:any, api_url:string) {
        let fetchUrl =`${this.SITENAME}${api_url}`;

        return this._http.put(fetchUrl, post)
            .map((response: Response)=>response.json())
            .catch(this.handleError);

    }

    /** method created for delete request
    params api_url
    it will accept the api url as parameters
    */

    public deleteMethod(api_url:string) {
        let fetchUrl = `${this.SITENAME}${api_url}`;

        return this._http.delete(fetchUrl)
            .map((response: Response)=>response.json())
            .catch(this.handleError);

    }

    /** method created for handle error request
    params error
    */
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            errMsg = (body.message) || '';
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }


}
