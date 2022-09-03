import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Shazam {{name}}</h1>`,
  styles: [`h1 { font-family: Monotype; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
