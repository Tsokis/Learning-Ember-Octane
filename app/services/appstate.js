import Service from '@ember/service';
import { tracked } from "@glimmer/tracking";

export default class AppstateService extends Service {
  @tracked state = [
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
  ];

  add(item){
    return this.state.pushObject(item);
  }
  delete(){
    return this.state.removeObject();
  }
}
