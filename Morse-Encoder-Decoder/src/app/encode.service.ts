import {Injectable, WritableSignal} from '@angular/core';
import {MorseCodeService} from "./morse-code.service";

@Injectable({
  providedIn: 'root'
})
export class EncodeService {

  constructor(private readonly morseCodeService: MorseCodeService) { }

  encode(inputText: WritableSignal<string>, filterSpaces: RegExp, encodedText: WritableSignal<string>) {
    inputText.update(old => old.replace(filterSpaces, ' ').trim());
    encodedText.set('');
    for (let i = 0; i < inputText().length; i++) {
      encodedText
        .update(old =>
          old + (inputText()[i] === ' ' ? '/' : this.morseCodeService.getMorseCode()[(inputText().charCodeAt(i) - 65)]) + ' '
        );
    }
    encodedText.update(old => old.trim());
  }
}
