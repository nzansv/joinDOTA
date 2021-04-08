import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}

export class ExitLoginGuard implements CanDeactivate<ComponentCanDeactivate>{

  canDeactivate(component: ComponentCanDeactivate): Observable<boolean> | boolean{

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
