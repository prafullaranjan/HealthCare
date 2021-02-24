import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoboxComponent } from './infobox/infobox.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const exportedComponents = [
  InfoboxComponent,
  AboutComponent,
  ExpertiseComponent,
  TestimonialComponent,
];

@NgModule({
  declarations: [...exportedComponents, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InfoboxComponent,
    AboutComponent,
    ExpertiseComponent,
    TestimonialComponent,
  ]
})
export class ComponentsModule { }
