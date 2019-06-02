import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FilterDataComponent extends Component {
  // filter-date
  @tracked fdate;
  @tracked ftitle;
  @tracked fversion;

  get dateByClass(){
    let date = document.querySelectorAll('.date');
    return date;
  }
  get titleByClass(){
    let title = document.querySelectorAll('.title');
    return title;
  }

  get versionByClass(){
    let version = document.querySelectorAll('.version');
    return version;
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
  @action filterInputTitle(props,e) {
    this.ftitle = e.target.value;
    props.filter(el => {
      if(el.title === this.ftitle){
        let arr = [...this.titleByClass];
        arr.filter(val => {
          if(val.innerHTML.includes(this.ftitle)) {
            let mainbody = document.querySelector('.mainbody');
            val.parentElement.classList.add('selected');
            let e = mainbody.childNodes;
            let eArr = [...e];
            this.ftitle = '';
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

  //Filter table version by version
  // TODO FILTER VERSION BY MATCHING STRING AND NOT BY FULL VERSION NAME
  @action filterInputVersion(props,e) {
    this.fversion = e.target.value;
    props.filter(el => {
      if(el.version === this.fversion){
        let arr = [...this.versionByClass];
        arr.filter(val => {
          if(val.innerHTML.includes(this.fversion)) {
            let mainbody = document.querySelector('.mainbody');
            val.parentElement.classList.add('selected');
            let e = mainbody.childNodes;
            let eArr = [...e];
            this.fversion = '';
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


}
