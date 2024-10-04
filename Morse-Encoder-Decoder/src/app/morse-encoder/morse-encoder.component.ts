import {Component, computed, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {EncodeService} from "../encode.service";
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-morse-encoder',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NavbarComponent
  ],
  templateUrl: './morse-encoder.component.html',
  styleUrl: './morse-encoder.component.css'
})
export class MorseEncoderComponent {
  inputText = signal('');
  encodedText = signal('');
  letterValidation = /^[A-Z]+(?: [A-Z]+)*$/;
  validateInput = computed(() => {
    return this.letterValidation.test(this.inputText());
  })

  constructor(readonly encodeService: EncodeService, readonly playerService: PlayerService) {
  }

  protected readonly String = String;
}
