import { Component } from '@angular/core';
//import { BokChoyUiComponent } from 'bok-choy-ui';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent {
  name: string = '';
  constructor() {}

  ngOnInit() {
    //this.name = this.uiComponent.GetLibraryName();
  }
}
