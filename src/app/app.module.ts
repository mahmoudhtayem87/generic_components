import {Injector, NgModule} from '@angular/core';
import {bootstrapApplication, BrowserModule, ɵDomSharedStylesHost} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {createCustomElement} from "@angular/elements";
import {DemoUtilsModule} from "./demo-util/module";
import { SampleComponentComponent } from './sample-component/sample-component.component';
import {MatCardModule} from '@angular/material/card';
import { SlottedCardComponent } from './slots-example/slotted-card/slotted-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SampleComponentComponent,
    SlottedCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap() {}
  constructor(private injector: Injector) {

    const appEvents = createCustomElement(EventsComponent, {
      injector: this.injector
    });
    customElements.define("lr-events", appEvents);


    const slottedCard = createCustomElement(SlottedCardComponent, {
      injector: this.injector
    });
    customElements.define("lr-slotted-card", slottedCard);

  }
}
