import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CreateRdNewsComponent extends Component {
  // Action for displaying the modal
  @action createModal(){
    return document.querySelector('.modal').style.display='block';
  }
  // Action for closing the modal
  @action closeModal(){
    return document.querySelector('.modal').style.display='none';
  }
}
