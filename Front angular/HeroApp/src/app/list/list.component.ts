import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

heros: any ;

  constructor(public _shared : SharedService){

  }

  ngOnInit(): void {
    this._shared.getAllHeros().subscribe(
      res=>{
      console.log(res);
      this.heros = res;
    },
    err=>{
      console.log(err);
    }
  );
  }

  delete(id: any){
    this._shared.deleteHero(id).subscribe(
      res=>{
      console.log(res);
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    }
  );
  }

}
