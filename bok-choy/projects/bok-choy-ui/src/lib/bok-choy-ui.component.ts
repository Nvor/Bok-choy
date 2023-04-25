import { Component } from '@angular/core';
import { BokChoyUiService, LibrarySummary } from './bok-choy-ui.service';

@Component({
  selector: 'lib-bok-choy-ui',
  template: `
    <p>
      bok-choy-ui works!
    </p>
  `,
  styles: [
  ]
})
export class BokChoyUiComponent {
  name: string = 'TestX1';

  constructor(private uiService: BokChoyUiService) {}

  GetLibraryName(): string {
    return this.name;
  }

  GetLibraryDetails(): string[] {
    const details = ['test1', 'test2'];
    return details;
  };

  GetLibrarySummary(): LibrarySummary {
    return this.uiService.GetLibrarySummary();
  }
}
