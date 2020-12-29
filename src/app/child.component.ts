import { Component, Input } from "@angular/core";

@Component({
  selector: "child",
  template: `
    <div>
      <h2>
        This is child component but data came from
        {{ passDataDoChild | uppercase }}
      </h2>
    </div>
  `
})
export class ChildComponent {
  @Input() passDataDoChild;
}
