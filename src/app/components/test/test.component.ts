import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
   nums = signal<number[]>([]);
   count = computed(()=> this.nums().length)
  
   add(){
    //this.nums().push(this.nums().length + 1)
    this.nums.set([...this.nums(), this.nums().length + 1])
    console.log(this.count())
   }

   reduce(){
    //this.nums().push(this.nums().length + 1)
    this.nums.set(this.nums().slice(0, this.nums().length - 1))
    console.log(this.count())
   }

}
