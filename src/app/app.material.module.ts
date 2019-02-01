import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule,
         MatMenuModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatMenuModule, MatNativeDateModule, MatToolbarModule],
    exports: [MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatMenuModule, MatNativeDateModule, MatToolbarModule],
    providers: [],
    entryComponents: []
})
export class MaterialModule {

}
