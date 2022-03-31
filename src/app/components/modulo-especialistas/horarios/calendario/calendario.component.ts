import { Component, Inject, ViewChild, ViewEncapsulation } from "@angular/core";
import * as moment from 'moment';
import {
  View,
  GroupModel,
  TimeScaleModel,
  ResourceDetails,
  TreeViewArgs,
  PopupOpenEventArgs,
  EventFieldsMapping,
  RenderCellEventArgs,
} from "@syncfusion/ej2-angular-schedule";
import {
  EventRenderedArgs, ScheduleComponent, MonthService, DayService, WeekService,
  WorkWeekService, EventSettingsModel, ResizeService, DragAndDropService, ActionEventArgs, AgendaService
} from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from "@syncfusion/ej2-base";
import { L10n } from '@syncfusion/ej2-base'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
})
export class CalendarioComponent {


}
