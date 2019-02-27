import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ConfigService {
  public headers: HttpHeaders;
  private appInsightUrl: string =
    "https://api.applicationinsights.io/v1/apps/AppId/"; //Replace AppId by your app id
  private apiKey: string = "APIKEY"; //Replace by your api key

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set("X-Api-Key", this.apiKey)
      .set("Content-Type", "application/json");
  }

  public get<Type>(url: string, params?: HttpParams) {
    return this.http.get<Type>(this.appInsightUrl + url, {
      headers: this.headers,
      params: params
    });
  }

  public textAbstract(text: string, length) {
    if (text == null) {
      return "";
    }
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
}
