import { Component } from '@angular/core';

@Component({
  selector: 'lib-bok-choy-ui',
  template: `
    <p style="color:red;">
      bok-choy-ui works!
    </p>
  `,
  styles: [
  ]
})
export class BokChoyUiComponent {
  // name: string = 'TestX1';

  constructor() {}

  ngOnInit() {
    console.log('ui lib comp initialized 3')
  }
  // GetLibraryName(): string {
  //   return this.name;
  // }

  // GetLibraryDetails(): string[] {
  //   const details = ['test1', 'test2'];
  //   return details;
  // };

  // GetLibrarySummary(): LibrarySummary {
  //   return this.uiService.GetLibrarySummary();
  // }
}
