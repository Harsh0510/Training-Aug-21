class Reservation {
    reservationId: number;
    customerId: number;
    tableId: number;
    noOfGuests: number;
    reservationDate: Date;
    reservationTime: Date;

    constructor(reservationId: number, customerId: number, tableId: number, noOfGuests: number, reservationDate: Date, reservationTime: Date) {
        this.reservationId = reservationId;
        this.customerId = customerId;
        this.tableId = tableId;
        this.noOfGuests = noOfGuests;
        this.reservationDate = reservationDate;
        this.reservationTime = reservationTime;

    }
}