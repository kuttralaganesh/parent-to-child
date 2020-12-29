import { Component } from "@angular/core";

@Component({
  selector: "parent",
  template: `
    <div>
      <h1>parent component</h1>
      <child [passDataDoChild]="data"></child>
    </div>
  `
})
export class ParentComponent {
  data = "I am from parents";
}
