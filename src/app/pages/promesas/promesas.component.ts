import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });

    /* const promesa = new Promise( (resolve, reject)=>{
      if(false){
        
        resolve('hola');
      }else{
        reject('algo esta mal');
      }
    });

    promesa.then((resolve)=>{
        console.log(resolve);
    })
    .catch(error=>{
        console.log('Error en mi promesa', error);
    });


    console.log('Fin del Init'); */

  }


  getUsuarios(){

    return new Promise(resolve =>{
      
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));

    });


  

  }



}
