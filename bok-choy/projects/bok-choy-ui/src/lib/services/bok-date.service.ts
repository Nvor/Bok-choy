import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BokDateService {

  constructor() { }

  GetCurrentDateLocal(): number {
    return Date.now();
  }
}
