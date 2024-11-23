import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalComponent } from './relojes/digital/digital.component';
import { BinaryComponent } from './relojes/binary/binary.component';
import { ClockDropdownComponent } from './relojes/clock-dropdown/clock-dropdown.component';
import { AnalogComponent } from './relojes/analog/analog.component';
import { TextComponent } from './relojes/text/text.component';
import { HexadecimalComponent } from './relojes/hexadecimal/hexadecimal.component';
import { ClockContainerComponent } from './relojes/clock-container/clock-container.component';
import { BarComponent } from './relojes/bar/bar.component';
import {FormsModule} from '@angular/forms'
import { CircleClockComponent } from './relojes/circleclock/circleclock.component';
import { StairClockComponent } from './relojes/stair-clock/stair-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalComponent,
    BinaryComponent,
    ClockDropdownComponent,
    AnalogComponent,
    TextComponent,
    HexadecimalComponent,
    ClockContainerComponent,
    BarComponent,
    CircleClockComponent,
    StairClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
