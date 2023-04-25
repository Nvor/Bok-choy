import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModuleModule { }
