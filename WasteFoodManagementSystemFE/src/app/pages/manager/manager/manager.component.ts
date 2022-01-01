import {Component, OnInit} from '@angular/core';
import {Food} from "../interface/food";
import {FoodService} from "../service/food.service";
import {DonateFoodDialogComponent} from "../dialogs/donate-food-dialog/donate-food-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

    public displayedColumns: string[] = [
        'index',
        'plateType',
        'quantity',
        'ingredients',
        'allergens',
        'expirationDate'
    ];
    public dataSource: Food[] = [];

    constructor(
        private foodService: FoodService,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.getFood();
    }

    private getFood() {
        this.foodService.getFood().subscribe((value: Food[]) => {
            this.dataSource = value;
        });
    }

    public openDonateFoodDialog() {
        const dialogRef = this.dialog.open(DonateFoodDialogComponent, {
            width: '25%',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.foodService.addFood(result).subscribe(() => {
                    console.log('Added successfully!');
                    this.getFood();
                });
            }
        });
    }
}
