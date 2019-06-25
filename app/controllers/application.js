import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('create-modal') modal;
  // Tracked Properties
  @tracked testArr;
  @tracked name = "John";
  @tracked sortProp = '';
  @tracked isPropReversed = false;
  // INPUT TESTS TACKED PROPERTIES
  @tracked title;
  @tracked date;
  @tracked version;
  @tracked counter = 0;
  headerInfo = [
    {name:'Date',sortBy:'date'},
    {name:'Title',sortBy:'title'},
    {name:'Version',sortBy:'version'},
    ];
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
    },
    {
      id:5,
      date: '30/05/19',
      title:'fonts',
      version:'v.0.5.0'
    },
    {
      id:6,
      date: '10/01/19',
      title:'Moved to Sass',
      version:'v.0.6.0 and We moved to Sass.'
    },
    {
      id:7,
      date: '04/02/19',
      title:'Settings',
      version:'v.0.7.0 New settings features for you to play.'
    },
    {
      id:8,
      date: '04/02/17',
      title:'unit tests',
      version:'v.0.8.0 Unit test.'
    },
    {
      id:9,
      date: '02/01/18',
      title:'buttons',
      version:'v.0.9.0 Buttons.'
    },
    {
      id:10,
      date: '04/02/19',
      title:'fonts',
      version:'v.1.0.0 fonts.'
    }
  ];
  @tracked people=[];
// Getters
  get Title(){
    return this.itRdNews.map(val => val.title);
  }
  get counterismo(){
    return this.counter++;
  }

  get dataArr(){
    return this.testArr = this.itRdNews;
  }
  // sort by the sort props
  get sortArrByProps(){
    let rdNews = this.itRdNews.sortBy(this.sortProp);
    if(this.isPropReversed) {
      return rdNews.reverse();
    } else {
      return rdNews;
    }
    //return this.itRdNews.sortBy(this.sortProp);
  }

  /**
   *    ACTIONS
   */
  @action sortByProp(prop){
    if(this.sortProp === prop) {
      this.isPropReversed =! this.isPropReversed;
    } else {
      this.isPropReversed = false;
    }
      //set the @tracked property to the property passed in the .hbs template
    this.sortProp = prop;
  }

  @action refresh(){
    return document.location.reload(true);
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

  @action handleSelect(){
    this.sortArrByProps.splice(0,this.sortArrByProps.length - 2);
    return this.sortArrByProps;
  }
  @action addPerson(person,version){
    let d = document.querySelectorAll('.btn-multi');
    for(let i=0; i<(d.length-1); i++){
      d[i].style.display = 'none';
    }
    console.log(person,version,...arguments)
    this.people.push(person,version);
    this.people = this.people;
  }

}
