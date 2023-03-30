import { Injectable } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Event} from "../models/Event";

declare const Liferay: any;
@Injectable({
  providedIn: 'root'
})
export class LiferayService {

  constructor(private http:HttpClient) { }
  public get AuthToken()
  {
    return Liferay.authToken;
  }

  public getEvents(DateField:string , Description:string,Title :string ,Image:string,eventStructureId:string)
  {
    let events: Array<Event> = [];
    const prom = new Promise((resolve, reject) => {
      this.http.get(`/o/headless-delivery/v1.0/content-structures/${eventStructureId}/structured-contents?p_auth=${this.AuthToken}`).subscribe((result:any) => {
        for(let index = 0 ; index < result["items"].length ; index++)
        {
          var event = new Event();
          event.Date = this.getFieldValue(DateField,result["items"][index]["contentFields"]);
          event.Description = this.getFieldValue(Description,result["items"][index]["contentFields"]);
          event.Title = this.getFieldValue(Title,result["items"][index]["contentFields"]);
          event.Image = this.getFieldValue(Image,result["items"][index]["contentFields"]);
          event.Id = result["items"][index]["id"];
          events.push(event);
        }
        resolve(events);
      });
    });
    return prom;
  }

  public getFieldValue : any= (FieldName:string, Fields:[]) => {
    const field = Fields.filter(f => {
      return f["name"] === FieldName
    })[0];
    let dataType = field["dataType"];
    let value = field["contentFieldValue"];
    switch (dataType)
    {
      case "date" :
      {
        return new Date(value["data"]);
      }
      case "string" :
      {
        return  value["data"];
      }
      case "image" :
      {
        return  value["image"]["contentUrl"];
      }
      default:{
        return value["data"];
      }
    }
  };
}
