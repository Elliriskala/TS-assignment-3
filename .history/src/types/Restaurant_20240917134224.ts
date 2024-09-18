type restaurant = {
    _id: string;
    companyId: string;
    name: string;
    address: string;
    postalCode: string;
    city: string;
    phone: string;
    location: {
        type: string;
        coordinates: number[];
    };
    company: string;
};
