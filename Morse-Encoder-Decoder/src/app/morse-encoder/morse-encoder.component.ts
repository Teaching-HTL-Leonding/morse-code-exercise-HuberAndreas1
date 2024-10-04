import {Component, signal, WritableSignal} from '@angular/core';
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
  letterValidation = /^[A-Z\s]+$/;
  filterSpaces = /\s+/g;

  constructor(readonly encodeService: EncodeService, private readonly playerService: PlayerService) {
  }

  async playMorseCode(){
    if (this.playerService.note_context.state === 'suspended') {
      await this.playerService.note_context.resume();
    }
    for (const word of this.encodedText().split(" / ")) {
      for (const letter of word.split(" ")) {
        for (const symbol of letter.split("")) {
          if(symbol === "."){
            await this.playerService.playDot();
          } else if(symbol === "-"){
            await this.playerService.playDash();
          }
          await this.playerService.sleep(this.playerService.SYMBOL_BREAK);
        }
        await this.playerService.sleep(this.playerService.LETTER_BREAK);
      }
      await this.playerService.sleep(this.playerService.WORD_BREAK);
    }
  }
  protected readonly String = String;
}
