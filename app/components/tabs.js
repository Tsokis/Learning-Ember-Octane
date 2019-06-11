import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TabsComponent extends Component {
  @service('hide-elements') hide;

  //init state
  @tracked objClassName = {
    class:'',
    state: null
  };

  get activeClass(){
    return this.objClassName = {
      class:'active',
      state: true
    }
  }

  get changeClassName(){
    return this.objClassName = {
      class: 'hide',
      state: !this.objClassName.state
    }
  }

  @tracked state={
    today:'Today',
    week:'Week',
    month:'Month',
    isShowing:false,
  };

  @tracked toggleText;

  get state_isShowing(){
    return this.state.isShowing =! this.state.isShowing;
  }

  get switchText(){
    return this.toggleText =! this.toggleText;
  }

  @action showMe(){
    this.state_isShowing;
    let div = document.querySelector('.test-div');
    this.activeClass;
    if(this.state_isShowing){
      div.style.display = 'block';
    }else{
      this.changeClassName;
      div.style.display = 'none';
    }
    this.switchText;
    return this.state_isShowing;
  }
}
