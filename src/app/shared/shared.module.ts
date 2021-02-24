import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
  ]
})
export class SharedModule { }
