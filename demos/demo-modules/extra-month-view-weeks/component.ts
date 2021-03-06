import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarUtils } from 'angular-calendar';
import { addDays, addHours, startOfDay, subWeeks, startOfMonth, endOfMonth, addWeeks } from 'date-fns';
import { GetMonthViewArgs, MonthView, getMonthView } from 'calendar-utils';

class MyCalendarUtils extends CalendarUtils {
  getMonthView(args: GetMonthViewArgs): MonthView {
    args.viewStart = subWeeks(startOfMonth(args.viewDate), 1);
    args.viewEnd = addWeeks(endOfMonth(args.viewDate), 1);
    return getMonthView(args);
  }
}

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html',
  providers: [{
    provide: CalendarUtils,
    useClass: MyCalendarUtils
  }]
})
export class DemoComponent {

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

}

