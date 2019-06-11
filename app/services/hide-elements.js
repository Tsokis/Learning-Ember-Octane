import Service from '@ember/service';

export default class HideElementsService extends Service {

  hideEl(){
    let hideEl = document.getElementsByClassName('tabcontent');
    for(let i=0; i<hideEl.length; i++){
      hideEl[i].style.display = 'none';
    }
  }
}
