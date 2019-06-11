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
  // temporary display if you refresh the page it will be lost
  @action submitForm(props){
    console.log(props);
    let passedObject =
    {
        id:5,
        date: this.args.dataVal,
        title:this.args.titleVal,
        version:this.args.versionVal
    };
    console.log(passedObject);
    this.args.dataArr.addObject(passedObject);
    console.log(this.args.dataArr);
  }
}
