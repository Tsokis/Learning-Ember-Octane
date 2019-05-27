import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FilterDataComponent extends Component {
  // filter-date
  @tracked fdate;

  get dateByClass(){
    let date = document.querySelectorAll('.date');
    return date;
  }

  //Filter table date  by date
  @action filterInputDate(props,e) {
    this.fdate = e.target.value;
    props.filter(el => {
      if(el.date === this.fdate){
        let arr = [...this.dateByClass];
        arr.filter(val => {
          if(val.innerHTML.includes(this.fdate)) {
            let mainbody = document.querySelector('.mainbody');
            val.parentElement.classList.add('selected');
            let e = mainbody.childNodes;
            let eArr = [...e];
            this.fdate = '';
            eArr.filter(el => {
              if(el.className === 'trbody'){
                el.className = 'trbody hide'
              }
           });
          }
        })
      }
    })
  }


  //Filter table title by title

  //Filter table version by version



}
