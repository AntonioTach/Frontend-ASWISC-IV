import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {


  public eventData: EventSettingsModel = {

    dataSource: [{

      Id: 1,

      Subject: 'Board Meeting',

      StartTime: new Date(2022, 0, 26, 3, 24, 0),

      EndTime: new Date(2022, 0, 26, 4, 24, 0),
      description: "holasd"

    },

    {

      Id: 2,

      Subject: 'Training session on JSP',

      StartTime: new Date(),

      EndTime: new Date(1643236363)

    },

    {

      Id: 3,

      Subject: 'Sprint Planning with Team members',

      StartTime: new Date(2022, 10, 30, 9, 30),

      EndTime: new Date(2022, 10, 30, 11, 0)

    }]

  }

}
