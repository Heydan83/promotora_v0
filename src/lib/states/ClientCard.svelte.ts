import type ClientsMainView from '$lib/Models/ClientsMainView';

class ClientCard {
    client: ClientsMainView = $state({} as ClientsMainView);

	constructor(client: ClientsMainView) {
		this.client = client
	}

    getZone() {
        return { id_zone: this.client.id_zone, zone: this.client.zone }
    }

    setZone(id_zone: number, zone: string) {
        this.client.id_zone = id_zone;
        this.client.zone = zone;
    }

    getBusinessType() {
        return { id_business_type: this.client.id_business_type, business_type: this.client.business_type }
    }

    setBusinessType(id_business_type: number, business_type: string) {
        this.client.id_business_type = id_business_type;
        this.client.business_type = business_type;
    }
}

export default ClientCard;

// class ClientCard implements ClientsMainView {
// 	id: number;
//     name: string = $state('');
// 	address: string = $state('');
// 	private id_zone: number = $state(-1);
// 	private zone: string = $state('');
// 	id_business_type: number = $state(-1);
// 	business_type: string = $state('');

// 	constructor(data: {
// 		id: number;
// 		name: string;
// 		address: string;
// 		id_zone: number;
// 		zone: string;
// 		id_business_type: number;
// 		business_type: string;
// 	}) {
// 		this.id = data.id;
// 		this.name = data.name;
// 		this.address = data.address;
// 		this.id_zone = data.id_zone;
// 		this.zone = data.zone;
// 		this.id_business_type = data.id_business_type;
// 		this.business_type = data.business_type;
// 	}

//     getZone() {
//         return { id_zone: this.id_zone, zone: this.zone }
//     }

//     setZone(id_zone: number, zone: string) {
//         this.id_zone = id_zone;
//         this.zone = zone;
//     }

//     getBusinessType() {
//         return { id_business_type: this.id_business_type, business_type: this.business_type }
//     }

//     setBusinessType(id_business_type: number, business_type: string) {
//         this.id_business_type = id_business_type;
//         this.business_type = business_type;
//     }

// 	static fromJSON(json: any): ClientCard {
// 		return new ClientCard({
// 			id: json.id,
// 			name: json.name,
// 			address: json.address,
// 			id_zone: json.id_zone,
// 			zone: json.zone,
// 			id_business_type: json.id_business_type,
// 			business_type: json.business_type
// 		});
// 	}

// 	toJSON(): object {
// 		return {
// 			id: this.id,
// 			name: this.name,
// 			address: this.address,
// 			id_zone: this.id_zone,
// 			zone: this.zone,
// 			id_business_type: this.id_business_type,
// 			business_type: this.business_type
// 		};
// 	}
// }
