import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  
  public myForm:FormGroup;
 public name:any;
 public price:any;
 public status:any;
  searchval:any='';
  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      name:[''],
      price:[''],
      status:['']
    })
    }

  ngOnInit() {}

  UserData=[
    {id:1,status:'Avilable', name:'mobile',price:5000},
    {id:2, status:'Avilable',name:'fdg',price:6666},
    {id:2, name:'laptop',price:10000,status:'NotAvilable'},
    {id:3, name:'pan',price:100,status:'Avilable'},
    {id:4, name:'charger',price:500,status:'NotAvilable'},
    {id:5, name:'shouse',price:600,status:'Avilable'},
    {id:6, name:'bag',price:700,status:'NotAvilable'}
  ]

  onSubmit(myForm){
    console.log(this.myForm.value);
  this.UserData.push({
    id:1,
   name:myForm.name.value,
    price:myForm.price.value,
    status:myForm.status.value
   })
  }

}
