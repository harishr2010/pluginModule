import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { StarComponent } from './star.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
    ],
    declarations: [
        StarComponent
    ],
    providers: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})

export class SharedModule {

}