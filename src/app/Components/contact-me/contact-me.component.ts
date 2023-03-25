import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  inputHandler = function(e: Event){
    let el = e.target as HTMLInputElement;

    if(el.value.length){
      el?.closest('div')?.querySelector('label')?.style?.setProperty('transform', 'translateY(0)')

      el?.closest('div')?.querySelector('ul')?.classList.remove('d-block');
      el?.closest('div')?.querySelector('ul')?.classList.add('d-none');
    } else {
      el?.closest('div')?.querySelector('label')?.style?.setProperty('transform', 'translateY(100%)')

      el?.closest('div')?.querySelector('ul')?.classList.remove('d-none');
      el?.closest('div')?.querySelector('ul')?.classList.add('d-block');
    }
  }

  focusHandler= function(e: Event){
    let el = e.target as HTMLInputElement;
    el?.closest('div')?.querySelector('label')?.classList.add('text-success')
  }

  blurHandler= function(e: Event){
    let el = e.target as HTMLInputElement;
    el?.closest('div')?.querySelector('label')?.classList.remove('text-success')
  }

  submitHandler= function(e: Event){
    e.preventDefault();
  }
}

