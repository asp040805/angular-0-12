import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  getName(value: any) {
    this.name = value;
  }
  hasClass: boolean = false;
  classList = {
    class1: true,
    class2: false,
    class3: true,
  };
  txt: any = 'Abhijeet';
  setData(event) {
    this.txt = event.value;
  }
  //---------------
  show: any = true;
  btntext: string = 'Hide';
  setHide() {
    this.show = !this.show;
    this.btntext = this.show ? 'Hide' : 'Show';
  }
}
