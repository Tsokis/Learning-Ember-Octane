import Service from '@ember/service';

export default class CreateModalService extends Service {
  // THROUGH VANILLA/NATIVE JAVASCRIPT
  // Edit method that calls 3 other methods for the compose of a modal [createTitle createDate createVersion]
  editAction(valueTitle,valueDate,valueVersion){
    //arguments are the values of our each loop through our application .hbs
    this.createTitle(valueTitle);
    this.createDate(valueDate);
    this.createVersion(valueVersion);
  }

  //Creates a div with a title label and title input
  createTitle(title){
    let section = document.getElementById('modalaki');
    let divTitle = document.createElement('div');
    let titleLabel = document.createElement('label');
    let titleInput = document.createElement('input');
    divTitle.setAttribute('class','divTitle');
    titleLabel.setAttribute('for','title');
    titleLabel.innerHTML = 'Edit Title';
    titleInput.setAttribute('id','title',);
    titleInput.setAttribute('value',title);
    divTitle.appendChild(titleLabel);
    divTitle.appendChild(titleInput);
    section.appendChild(divTitle);
  }
//Creates a div with a date label and date input
  createDate(date){
    let section = document.getElementById('modalaki');
    let divDate = document.createElement('div');
    let dateLabel = document.createElement('label');
    let dateInput = document.createElement('input');
    divDate.setAttribute('class','dateLabel');
    dateLabel.innerHTML='Edit Date';
    dateInput.setAttribute('id','date',);
    dateInput.setAttribute('value',date);
    divDate.appendChild(dateLabel);
    divDate.appendChild(dateInput);
    section.appendChild(divDate);
  }
  //Creates a div with version label and version textarea
  createVersion(version){
    let section = document.getElementById('modalaki');
    let divVersion = document.createElement('div');
    let versionLabel = document.createElement('label');
    let textareaVersion = document.createElement('textarea');
    divVersion.setAttribute('class','versionLabel');
    versionLabel.innerHTML = 'Version';
    textareaVersion.setAttribute('id','version',);
    textareaVersion.innerHTML = version;
    divVersion.appendChild(versionLabel);
    divVersion.appendChild(textareaVersion);
    section.appendChild(divVersion);
  }
}
