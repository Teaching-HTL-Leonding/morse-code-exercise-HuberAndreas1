import {Component, computed, signal} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DecodeService} from "../decode.service";
import {MorseCodeService} from "../morse-code.service";

@Component({
  selector: 'app-morse-decoder',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './morse-decoder.component.html',
  styleUrl: './morse-decoder.component.css'
})
export class MorseDecoderComponent {
  morseInput = signal('');
  decodedText = signal('');
  morseRegex = /^[.\- ]+(?: \/ [.\- ]+)*$/;
  constructor(readonly decodeService: DecodeService) {
  }
  validInput = computed(() => {
      return this.morseRegex.test(this.morseInput());
    });
}
