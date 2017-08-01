import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: "ai-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.scss"],
})
export class StarComponent implements OnChanges {
    public starWidth: number;
    @Input() public rating: number;
    @Output() public ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    public ngOnChanges(): void {
        this.starWidth = this.rating * 95 / 5;
    }

    public onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
