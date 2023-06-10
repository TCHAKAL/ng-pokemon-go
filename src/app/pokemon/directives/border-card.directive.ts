import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]',
    standalone: true
})
export class BorderCardDirective {

  private initialHeigt: number = 180;
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef) {
    this.setHeight(this.initialHeigt);
    this.setBorder(this.initialColor)
  }

  @Input('pokemonBorderCard') borderColor: string;//alias
  //@Input() pokemonBorderCard: string;//sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
