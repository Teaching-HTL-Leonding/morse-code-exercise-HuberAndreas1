import { Routes } from '@angular/router';
import {MorseDecoderComponent} from "./morse-decoder/morse-decoder.component";
import {MorseEncoderComponent} from "./morse-encoder/morse-encoder.component";

export const routes: Routes = [
  { path: 'encode', component: MorseEncoderComponent},
  { path: 'decode', component: MorseDecoderComponent},
  { path: '', redirectTo: '/encode', pathMatch: 'full'}
];
