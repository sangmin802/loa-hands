export default class HomeData {
  constructor(raw){
    // 이벤트리스트
    this.setEvents(raw);
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
}