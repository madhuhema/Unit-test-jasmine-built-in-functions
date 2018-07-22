import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
totalVotes: number;
count: number;
countChanged = new EventEmitter();
  constructor() {
    this.totalVotes = 0;
    this.count = 0;
   }

  ngOnInit() {
  }
    checkPalindromeArray(inputString) {
    var input = inputString;
    var a = input.split(",");
    var b = [];
    var i,j,f=0,l=0;
    var result=" ";
    var temp=" ";
    for(var k=0;k<a.length;k++)
    {
        f=0;
        temp = a[k].toLowerCase();
        for(i=0, j=temp.length-1; i<=j; i++, j--)
        {
            if(temp[i]!=temp[j])
            {
                f=1;
                break;
            }
        }
        if(f==0)
            b[l++] = temp;
    }
    result =  b.join(", ") ;
    return result;
}
getCurrencies()
{
  return ['EUR','RUPEES','USD'];
}
upVote()
{
return this.totalVotes++;
}
downVote()
{
return this.totalVotes--;
}
increment()
{
this.count++;
this.countChanged.emit(this.count);
}
}
