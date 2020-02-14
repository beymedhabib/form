import { NgModule} from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatButtonModule,
   MatButtonToggleModule,
    MatIconModule,
     MatProgressSpinnerModule,
      MatToolbarModule,
       MatSidenavModule,
      MatMenuModule,
    MatAutocompleteModule,
    MatNativeDateModule
    } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
// import { ModalModule } from './_modal';
import { MatBadgeModule } from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatInputModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule
  // ModalModule
];

@NgModule({
  imports: [Material, ],
  exports: [Material, ]
})
export class MaterialModule { }
