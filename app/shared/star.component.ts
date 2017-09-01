import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    template: `<h1>Hadging for start component</h1>`
})

export class StarComponent implements OnChanges {
    @Input()
    rating: number;

    @Output()
    ratingCliked: EventEmitter<string> = new EventEmitter();

    starWidth: number = 1;

    ngOnChanges(): void {
        this.starWidth = 86 / 5 * this.rating;
    }

    onClick(): void {
        this.ratingCliked.emit(`The rating ${this.rating} was clicked`);
    }
}