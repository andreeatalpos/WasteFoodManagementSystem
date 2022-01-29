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
    public dataSource: Users[] = [
        {id: 1,full_name: "Crina", username: 'crinapop13', user_role: "admin", phone_number: '0745667889'},
        {id: 2, full_name: "Raluca", username: 'ralucapop', user_role: "manager", phone_number: '0765667809'}
    ];

    public selection = new SelectionModel<Users>(true, []);

    constructor(
        private userService: MakeRequestsService) {
    }

    ngOnInit(): void {
        //this.getUsers();
    }

    // private getUsers() {
    //     this.userService.getUsers().subscribe((value: Users[]) => {
    //         //this.dataSource = value;
    //     });
    // }

    public deleteUsers() {
        this.userService.deleteUsers(this.dataSource);
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
}
