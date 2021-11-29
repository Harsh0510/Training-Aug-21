export class Table {

    restaurantId: number;
    tableId: number;
    tableType: string;
    noOfAvailableTable: number;

    constructor(restaurantId: number, tableId: number, tableType: string, noOfAvailableTable: number) {
        this.restaurantId = restaurantId;
        this.tableId = tableId;
        this.tableType = tableType;
        this.noOfAvailableTable = noOfAvailableTable;

    }
    displaytable() {
        console.log(`${this.restaurantId}\t${this.tableId}\t${this.tableType}\t${this.noOfAvailableTable}\t`);
    }
}

