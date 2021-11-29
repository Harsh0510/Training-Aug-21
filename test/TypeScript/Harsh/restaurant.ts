export class Restaurant {
    restaurantId: number;
    restaurantName: string;
    restaurantCity: string;
    restaurantState: string;
    restaurantCountry: string;

    constructor(restaurantId: number, restaurantName: string, restaurantCity: string, restaurantState: string, restaurantCountry: string) {

        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantCity = restaurantCity;
        this.restaurantState = restaurantState;
        this.restaurantCountry = restaurantCountry;
    }
    displayRestaurant() {
        console.log(`${this.restaurantId}\t${this.restaurantName}\t${this.restaurantCity}\t${this.restaurantState}\t${this.restaurantCountry}\t`)
    }
}