import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class DataTableComponent extends Component {
  @tracked title = 'title';
  @tracked version = 'version';
  @tracked date = 'date';
  @tracked optionClass = 'sikario';
 // @tracked whichUser = 'superuser';
  @tracked valArr = [5,10,25];

  get titleHeader(){
    if(this.args.updatedSortProp === this.args.title){
      return this.args.updatedSortProp;
    }

  }

  get dateHeader(){
    if(this.args.updatedSortProp === this.args.date){
      return this.args.updatedSortProp;
    }
  }
  get versionHeader(){
    if(this.args.updatedSortProp === this.args.version){
      return this.args.updatedSortProp;
    }
  }

  //Working
  get testing(){
    return this.args.title || this.title;
  }

  @action handleSelect(){
    let trbody = document.querySelectorAll('#trbody');
    let itbody = [...trbody];
    // let optionClass = document.querySelectorAll(`.${this.optionClass}`);
    // let copyArr = [...optionClass];
    // console.log(copyArr);
    let select = document.getElementById('select-box');
    let curLen = itbody.length - 5;
    if(select.value == "5"){
      console.log(`you have selected 5 --- ${select.value}`);
      for(let i=0; i<curLen; i++){
        itbody[i].style.display = 'none';
      }
    }else if(select.value == "10"){
      console.log(`you have selected 10  --- ${select.value}`);
      for(let i=0; i<trbody.length; i++){
        itbody[i].style.display = 'block';
      }
    }else{
      console.log(`you have selected 25  --- ${select.value}`);
    }
    let index = select.selectedIndex;
    console.log(index);
    // FIRST HIDE THE ELEMENTS
    //itbody.forEach(val => val.style.display = 'none');
    /**
     * itbody.length = 10; // itbody.length - to value pou epilegoume = apotelesma pinaka me length pou theloume gia to ui
     */
    // LENGTH APO TON PINAKA
    // TIN TIMH POU EPILEGOUME STO SELECT
    // AFERESH LENGTH - TIMH POU EPILEGOUME
    // DISPLAY TO APOTELESMA STO UI
    //HARD CODED WORKS
    // console.log(this.sik);
    // let sika = document.querySelectorAll('.sikario');
    // console.log(sika);
    // let ts = [...sika];
    // ts.filter(val => {
    //   console.log(val.value);
    //   if(val.value === 5){
    //     for(let i=0; i<trbody.length; i++){
    //       trbody[6].style.display = 'none';
    //       trbody[7].style.display = 'none';
    //       trbody[8].style.display = 'none';
    //       trbody[9].style.display = 'none';
    //       trbody[5].style.display = 'none';
    //     }
    //   }
    // });

  }
  @action updateVal(newValue){
    this.value = newValue;
  }

}
