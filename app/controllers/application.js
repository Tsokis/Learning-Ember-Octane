import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('create-modal') modal;
  @tracked count = 0;
  @tracked stringName;
  // INPUT TESTS TACKED PROPERTIES
  @tracked title;
  @tracked date;
  @tracked version;

  /**
   *    ACTIONS
   */
  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
  @action getDate(){
    return this.date;
  }
  @action refresh(){
    return document.location.reload(true);
  }

  @action message(){
    let m = prompt('Enter something!!');
    return this.stringName = m;
  }
  @action handleDate(e){
    this.date = e.target.value;
    console.log(`Date: ${this.date}`);
  }

  @action handleTitle(e){
    this.title = e.target.value;
    console.log(`Title: ${this.title}`);
  }

  @action handleVersion(e){
    this.version = e.target.value;
    console.log(`Version: ${this.version}`);
  }

  @action submitForm(e){
    e.preventDefault();
    console.log(`State: ${this.date},${this.title},${this.version}`)
  }
  @action generateModal(props){
    console.log(props);
    return this.modal.editAction(props.title,props.date,props.version);
  }

  @action editModal(props){
    console.log(props);
    console.log(this.args.props);
  }


// Static array of objects for demo purposes
  itRdNews=[
    {
      id:1,
      date: '12/05/19',
      title:'test',
      version:'Fixes on unit tests v0.1.0'
    },
    {
      id:2,
      date: '12/07/18',
      title:'Ui',
      version:'Ui bugs fixed v0.2.0'
    },
    {
      id:3,
      date: '22/11/18',
      title:'Filters on news page',
      version:'Data filters have been fixed and the ui have been updated v.0.3.0'
    },
    {
      id:4,
      date: '19/05/19',
      title:'images',
      version:'v.0.4.0'
    }

  ]
}
