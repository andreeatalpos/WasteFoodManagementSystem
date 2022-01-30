import {Component, OnInit} from '@angular/core';
import {Users} from "./interface/users";
import {SelectionModel} from "@angular/cdk/collections";
import {MakeRequestsService} from "./service/make-requests.service";

@Component({
    selector: 'app-make-requests',
    templateUrl: './make-requests.component.html',
    styleUrls: ['./make-requests.component.scss']
})
export class MakeRequestsComponent implements OnInit {
    public displayedColumns: string[] = [
        'select',
        'id',
        'full_name',
        'username',
        'user_role',
        'phone_number'
    ];
    public dataSource: Users[] = [];

    public selection = new SelectionModel<Users>(true, []);

    constructor(
        private userService: MakeRequestsService) {
    }

    ngOnInit(): void {
        this.getUsers();
    }

    private getUsers() {
        this.userService.getUsers().subscribe((value: Users[]) => {
            this.dataSource = value;
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
    checkboxLabel(row?: Users): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }

    public deleteUsers() {
        this.userService.deleteUsers(this.selection.selected.map(data => data.id)).subscribe(() => {
            this.getUsers();
            this.selection.clear();
        });

    }
}
