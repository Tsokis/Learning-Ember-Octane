import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditActionComponent extends Component {
  @tracked toggleModal=false;

  get ar(){
    return this.args;
  }

  @action closeModal(){
    console.log(this.ar);
    this.toggleModal =!this.toggleModal;
  }
  @action toggler(){
    return this.toggleModal =!this.toggleModal;
  }
}
