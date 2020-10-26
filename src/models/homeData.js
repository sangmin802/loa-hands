export default class HomeData {
  constructor(raw){
    // 이벤트리스트
    this.setEvents(raw);
    console.log(this.events)
  }

  setEvents(raw){
    const 
      eventList = raw.getElementsByClassName('list list--event')[0].children[0].children;

    this.events = [...eventList].map(li => {
      const 
        children = li.children[0].children,
        img = children[0].children[0].attributes.src.value,
        name = children[1].children[0].textContent,
        date = children[2].children[0].childNodes[1].textContent.trim().replace(': ', '');
        
      let 
        receiveDate, onGoing = null;
      
      if(children[2].getElementsByClassName('list__receive').length !== 0){
        const target = children[2].getElementsByClassName('list__receive')[0];
        receiveDate = target.childNodes[1].textContent.trim().replace(': ', '');
        onGoing = children[2].children[2].textContent.replace(/ /g, '').replace(/\n/ig, ' ');
      }else{
        onGoing = children[2].children[1].textContent.replace(/ /g, '').replace(/\n/ig, ' ');
      }

      return {
        img, name, date, onGoing, receiveDate
      }
    })
  }
}