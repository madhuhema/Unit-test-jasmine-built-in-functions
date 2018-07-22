import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  // check whether the output contains a expected palindrome
  it(" should check checkPalindromeArray returns a string " , () => {
    //assert
    expect(component.checkPalindromeArray("mom,madam,java,python")).toContain("mom");
  });
 // checks whether the returned array contains an expected value
 it('should check getCurrencies function contains an expected value', () => {
   expect(component.getCurrencies()).toContain('USD');
   expect(component.getCurrencies()).toContain('RUPEES');
   expect(component.getCurrencies()).toContain('EUR');
 });
 // check whether the returned array does not contain unexpected value
 it('should check getCurrencies function contains any unexpected value', () => {
   expect(component.getCurrencies()).toContain('YEN');
 });
 //check whether upVote function increments totalVotes
 it('should check upVote function increments totalVotes value by 1 ' , () => {
   component.upVote();
   expect(component.totalVotes).toBe(1);
 });
 //check whether downVote function decrements totalVotes
 it('should check downVote function decrements totalVotes value by 1 ' , () => {
   component.downVote();
   expect(component.totalVotes).toBe(-1);
 });
 //check event emitter
 it('should raise countChange event when incremented', () => {
   let count = null;
   component.countChanged.subscribe( c => count = c);
   component.increment();
   expect(count).not.toBeNull();
   expect(count).toBe(2);
 });
});
