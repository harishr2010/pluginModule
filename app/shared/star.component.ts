import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    template: `<div class="crop" 
                [style.width.px]="starWidth" 
                [title]="rating"
                (click)="onClick()">
                    <div style="width:86px">
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                        <span class="glyphicon glyphicon-star"></span>
                    </div>
                </div>`
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