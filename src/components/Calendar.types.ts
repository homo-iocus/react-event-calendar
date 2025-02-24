export type DateType = moment.MomentInput;
export type EventType = "Dots" | "Fill";

export interface IEvents {
  date: DateType;
  color: string;
  extraData?: any;
}

export interface ICalendarProps {
  renderDay?: Function | Boolean;
  renderDayContent?: Function | Boolean;
  renderEvent?: Function | Boolean;
  // defaultDay?: DateType;
  defaultSelected?: moment.MomentInput;
  holidays?: Array<DateType>;
  events?: Array<IEvents>;
  eventType?: EventType;
  prefixID?: string;
  defaultDayFormater?: string;
  date?: DateType;
  displayWeek?: Boolean;
  dateFormat?: string;
  prevBtn?: Function | Boolean;
  nextBtn?: Function | Boolean;
  onActiveDateChange?: Function;
  headerType?: "EvenSpread" | "ActionSeparate";
  onClickDay?: Function;
}
export interface IDayBlockProps {
  isToday: Boolean;
  isSelectedDay: Boolean;
  isSameMonth: Boolean;
  isHoliday: Boolean;
  defaultFormatedDay: String;
  day: DateType;
  events?: Array<IEvents>;
  index: any;
}
export interface Week {
  days: Array<moment.Moment>;
}
