export class CustomerReference {
    name: string;
    location: string;
    notes: string[];
}

export class GroupedCustomerReference {
    name: string;
    locations: {
      location: string;
      notes: string[]
    } [];
  }
