import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,  FormArray, FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent{

  productForm:FormGroup;
  msg:String = '';
  id:Number=1;
  
  constructor(
    private productService: ProductService,
    private fb:FormBuilder
  )
  {
    this.id = Math.random();
    this.productForm = this.fb.group({
      title:'',
      img:'assets/',
      description:'',
      price:'',
      id:({value:this.id, disabled: false}),
      variant:this.fb.array([])
    });
  }
  
  variant(): FormArray {  
    return this.productForm.get("variant") as FormArray  
  }  
  
  newVariant(): FormGroup{  
    return this.fb.group({  
      name:'',  
      option:this.fb.array([]) 
    });  
  }
  
  addVariant() { 
    this.variant().push(this.newVariant());   
    console.log("Variant",this.variant()) 
    return this.productForm.get("variant") as FormArray
  }  
  
  option(index: number): FormArray{
    return this.variant().controls[index].get('option') as FormArray
  }

  newOption(): FormGroup{
    return this.fb.group({
      spec:'',
      price:''
    });
  }

  addOption(index: number){
    this.option(index).push(this.newOption());
    console.log(this.option(index));
    return this.variant().controls[index].get('option') as FormArray
  }

  // resetForm(){
  //   console.log('reset',this.productForm)
  //   this.productForm.reset();
  // }

  add(){
    if(this.productForm.valid){
      this.productService.productList.push(this.productForm.value);
      // this.resetForm();
      console.log('this.productService.productlost',this.productService.getProducts())}
      else {
      this.msg = 'Please complete form'
    }
  }

  removeVariant(i:number) {  
    this.variant().removeAt(i);  
  }
  
  onSubmit() {  
    console.log(this.productForm.value);  
  }  
}
