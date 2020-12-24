import _ from '../Utility.js';
import {calendarIsland} from '../JSON.js';

interface ICalendar {
  [prop : string] : string | string[] | object
}

export default class HomeData {
  events : {[key : string] : string}[]
  calendar : ICalendar[][]

  constructor(raw : string[]){
    const [calendar, events] = raw;
    // 이벤트리스트
    this.setEvents(_.returnBody(events));

    // 캘린더섬
    this.setCalendar(_.returnBody(calendar));
  }

  setEvents(raw){
    const eventList = raw.getElementsByClassName('list list--event')[0].children[0].children;

    this.events = [...eventList].map(li => {
      const href = li.children[0].attributes.href.value;
      const children = li.children[0].children;
      const img = children[0].children[0].attributes.src.value;
      const name = children[1].children[0].textContent;
      const date = children[2].children[0].childNodes[1].textContent.trim().replace(': ', '');

      return {
        img, name, date, href
      }
    })
  }

  setCalendar(raw){
    const timerList = [...raw.getElementsByClassName('info')],
      _ = new Date();
    const today = `${_.getFullYear()}-${this.zero(_.getMonth()+1)}-${this.zero(_.getDate())}`;
    this.calendar = timerList.reduce((prev, next) => {
      const name = next.getElementsByClassName('npcname')[0].textContent;
      const target = calendarIsland.find(cal => cal.name===name);
      if(!next.textContent.includes(today) || !target) return prev;
      if(next.textContent.includes('14:00')){
        prev[0].push({...target, time : ['14:03'], endTime : '14:03'});
      }else if(next.textContent.includes('21:00')){
        prev[1].push({...target, time : ['21:03'], endTime : '21:03'});
      }
      return prev;
    }, [[], []])
  }

  zero(num){
    if(num < 10){
      return '0'+num;
    }
    return num;
  }
}