import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './_directives/directives.module';
import { ModulesModule } from './_modules/modules.module';
import { ComponentsModule } from './_components/components.module';


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    ModulesModule,
    ComponentsModule
  ],
  declarations: [],
  exports: [
    DirectivesModule,
    ModulesModule,
    ComponentsModule
  ]
})
export class SharedModule { }
