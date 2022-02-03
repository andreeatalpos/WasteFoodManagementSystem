import {Component, OnInit} from '@angular/core';
import {Food} from "../../../manager/interface/food";
import {SelectionModel} from "@angular/cdk/collections";
import {ExpiredService} from "./service/expired.service";

@Component({
    selector: 'app-expired-food',
    templateUrl: './expired-food.component.html',
    styleUrls: ['./expired-food.component.scss']
})
export class ExpiredFoodComponent implements OnInit {
    public displayedColumns: string[] = [
        'select',
        'id',
        'plateType',
        'quantity',
        'ingredients',
        'allergens',
        'expirationDate'
    ];
    public dataSource: Food[] = [];

    public selection = new SelectionModel<Food>(true, []);

    constructor(
        private foodService : ExpiredService) {
    }

    ngOnInit(): void {
        this.getFood();
    }

    private getFood() {
        this.foodService.getFood().subscribe((value: Food[]) => {
            this.dataSource = value;
        });
    }

    public deleteFood() {
        this.foodService.deleteFood(this.selection.selected.map(data => data.id)).subscribe(() => {
            this.getFood();
            this.selection.clear();
        });

    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }

        this.selection.select(...this.dataSource);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Food): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }


}
