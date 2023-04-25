import { Injectable } from '@angular/core';
import { BokDateService } from './services/bok-date.service';

@Injectable({
  providedIn: 'root'
})
export class BokChoyUiService {

  constructor(private dateService: BokDateService) {}

  GetLibrarySummary(): LibrarySummary {
    const summary = {
      name: 'TestLib',
      version: 1.0,
      description: 'This is a test library.'
    }

    return summary;
  } 
}

export interface LibrarySummary {
  name: string;
  version: number;
  description: string;
  //date: Date;
}