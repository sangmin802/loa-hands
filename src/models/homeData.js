import Factory from '../factory.js';

export default class HomeData {
  constructor(raw){
    const [calendar, events] = raw;
    // 이벤트리스트
    this.setEvents(Factory.returnBody(events));

    // 캘린더섬
    this.setCalendar(Factory.returnBody(calendar));
  }

  setEvents(raw){
    const 
      eventList = raw.getElementsByClassName('list list--event')[0].children[0].children;

    this.events = [...eventList].map(li => {
      const 
        href = li.children[0].attributes.href.value,
        children = li.children[0].children,
        img = children[0].children[0].attributes.src.value,
        name = children[1].children[0].textContent,
        date = children[2].children[0].childNodes[1].textContent.trim().replace(': ', '');

      return {
        img, name, date, href
      }
    })
  }

  setCalendar(raw){
    const 
      timerList = [...raw.getElementsByClassName('info')];
      // npcicon
      // gentime
      // npcname

    this.calendar = timerList.reduce((prev, next) => {
      const
        src = next.getElementsByClassName('npcicon')[0].attributes.src.value,
        name = next.getElementsByClassName('npcname')[0].textContent,
        obj = {
          src, 
          name, 
          lv : '-', 
          position : '대항해', 
        }

      if(next.textContent.includes('14:00')){
        prev[0].push({...obj, time : ['14:13'], endTime : '14:13'});
      }else if(next.textContent.includes('21:00')){
        prev[1].push({...obj, time : ['21:13'], endTime : '21:13'});
      }
      return prev;
    }, [[], []])
  }
}