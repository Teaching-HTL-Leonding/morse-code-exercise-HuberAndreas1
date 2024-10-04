import {Injectable, WritableSignal} from '@angular/core';
import {MorseCodeService} from "./morse-code.service";

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  constructor(private morseCodeService: MorseCodeService) {
  }

  decode(morseInput: string) {
    return (String.fromCharCode(...morseInput
      .split(' ')
      .map((e) =>
        this.morseCodeService.getMorseCode().includes(e)
          ? this.morseCodeService.getMorseCode().indexOf(e) + 65
          : ' '.charCodeAt(0))
    ));
  }
}
