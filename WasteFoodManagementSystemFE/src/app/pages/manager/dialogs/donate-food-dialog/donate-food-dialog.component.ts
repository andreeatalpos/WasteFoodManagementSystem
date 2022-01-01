import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-donate-food-dialog',
    templateUrl: './donate-food-dialog.component.html',
    styleUrls: ['./donate-food-dialog.component.scss']
})
export class DonateFoodDialogComponent implements OnInit {
    public form: FormGroup = this.createFrom();

    constructor(
        public dialogRef: MatDialogRef<DonateFoodDialogComponent>,
    ) {
    }

    ngOnInit(): void {
    }

    public onClose() {
        this.dialogRef.close();
    }

    public submit() {
        return this.form.value;
    }

    private createFrom() {
        return new FormGroup({
            plateType: new FormControl(),
            quantity: new FormControl(),
            ingredients: new FormControl(),
            allergens: new FormControl(),
            expirationDate: new FormControl()
        })
    }
}
