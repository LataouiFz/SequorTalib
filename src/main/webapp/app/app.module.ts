import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SequortalibSharedModule } from 'app/shared/shared.module';
import { SequortalibCoreModule } from 'app/core/core.module';
import { SequortalibAppRoutingModule } from './app-routing.module';
import { SequortalibHomeModule } from './home/home.module';
import { SequortalibEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { NoteExComponent } from './note-ex/note-ex.component';

@NgModule({
  imports: [
    BrowserModule,
    SequortalibSharedModule,
    SequortalibCoreModule,
    SequortalibHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SequortalibEntityModule,
    SequortalibAppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    NoteExComponent
  ],
  bootstrap: [MainComponent]
})
export class SequortalibAppModule {}
