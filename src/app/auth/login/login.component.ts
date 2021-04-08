import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from './exit-login.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ComponentCanDeactivate {

  saved = false;
  save(): void{
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean>{

    if (!this.saved){
      return confirm('Say bye-bye?');
    }
    else{
      return true;
    }
  }
}
