import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import { startOfDay } from 'date-fns';
import {LiferayService} from "../services/liferay.service";
import {Event} from "../models/Event";
import {Subject} from "rxjs";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private lr_service:LiferayService) {
  }
  view: CalendarView = CalendarView.Month;
  selectedEvent : any = null;
  viewDate = new Date();


  CalendarView = CalendarView;
  events: CalendarEvent[] = [];

  @Input('eventDateField')
  public eventDateField:string = "";
  @Input('eventDescriptionField')
  private eventDescriptionField:string = "";
  @Input('eventTitleField')
  private eventTitleField:string = "";
  @Input('eventImageField')
  private eventImageField:string = "";
  @Input('eventStructureId')
  private eventStructureId:string = "";

  async collectData() {
    var data =
        await this.lr_service.getEvents
        (
            this.eventDateField,this.eventDescriptionField,
            this.eventTitleField, this.eventImageField,
            this.eventStructureId
        );
    data = data as Array<Event>;
    this.events = [];
    // @ts-ignore
    for (let index = 0 ; index < data.length ; index++)
    {
      this.events.push({
        // @ts-ignore
        start: startOfDay(data[index].Date),
        // @ts-ignore
        title: data[index].Title,
        // @ts-ignore
        description:data[index].Description,
        // @ts-ignore
        image:data[index].Image,

      });
    }
  }

  ngOnInit(): void {
    this.collectData();
  }


  selectDate(event:any) {
    this.selectedEvent = event.event;
  }
}
