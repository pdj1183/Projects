export type auctionItem = {
    id: string;
    make: string;
    model: string;
    year: number;
    description: string;
    location: string;
    mileage: string;
    end: string;
    reserve: boolean;
    status: string;
};

 export type timeRemaining = {
     seconds: number;
     minutes: number;
     hours: number;
     days: number;
 };
