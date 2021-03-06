/**
 * Created by dinohorvat on 24/10/2017.
 */
import { NgModule } from '@angular/core';
import {RewardsRoutingModule} from "./rewards-routing.module";
import {RewardsComponent} from "./rewards.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ModalModule, Ng2BootstrapModule} from "ng2-bootstrap";


@NgModule({
    imports: [
        RewardsRoutingModule,
        CommonModule,
        Ng2BootstrapModule,
        ModalModule.forRoot(),
        FormsModule
    ],
    declarations: [ RewardsComponent ]
})
export class RewardsModule { }
