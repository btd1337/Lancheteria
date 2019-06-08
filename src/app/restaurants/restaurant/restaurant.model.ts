export interface Restaurant {
	id: string;
	name: string;
	category: {
		id: number;
		name: string;
	};
	deliveryEstimate: string;
	rating: number;
	imagePath: string;
	about?: string;
	hours?: string;
	open: boolean;
	favorite: boolean;
}
