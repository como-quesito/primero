import {Component} from 'angular2/core';
import {Hero} from './hero'
import {MensajeMongutio} from './MensajeMongutio';
import {Injectable}     from 'angular2/core';

import {Http,Response, Headers,HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
    selector: 'my-app',
    templateUrl: 'inicio.html'
})
@Injectable()
export class AppComponent {
  mensajes:MensajeMongutio[];
  constructor(http: Http) {
  http.get('http://localhost:9999/mensaje-mongo')
       // Call map on the response observable to get the parsed people object

       // Subscribe to the observable to get the parsed people object and attach it to the
       // component
       .subscribe(res=>{
          //Esta es como una funcion!!
          this.mensajes=res.json(), console.log('hay malo  '+JSON.stringify(this.mensajes));
          console.log('eres malo');
        //  this.hola=this.usuario.email;

      });
   }

   cargar(){
     console.log("ha cargar"+this.mensajes[0].cuerpo);
   }

}
