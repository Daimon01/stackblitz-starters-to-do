import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>This is my test {{ name }}!</h1>
    <a target="_blank" href="https://novo-sibirsk.ru/">
      Это мой город 
    </a>
    <div id="Dim Sum" class="tabcontent">
  
  <div class="box">
  <img src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663367210_19-mykaleidoscope-ru-p-novosibirsk-stolitsa-sibiri-pinterest-19.jpg">
    
  </div>

    
    
  `,
})
export class App {
  name = 'project';
  
}

bootstrapApplication(App);
