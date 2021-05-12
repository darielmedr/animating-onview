import { AfterViewInit, Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appShowInView]'
})
export class ShowInViewDirective implements AfterViewInit {

  private isShownInView: boolean = false;

  @Input()
  public className: string = '';

  @HostBinding('class')
  private get class() {
    return this.isShownInView ? this.className : '';
  };

  constructor(private targetElement: ElementRef) { }

  ngAfterViewInit(): void {
    this.initObserver();
  }

  private initObserver(): void {
    const observer = new IntersectionObserver(this.handleOnView);
    observer.observe(this.targetElement.nativeElement);
  }

  private handleOnView = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    const entry: IntersectionObserverEntry = entries[0];
    this.isShownInView = entry.isIntersecting;
  }

}
