export type InitialLocationStateType = {
  locations: {
    results: LocationResultsType[];
    info: any;
  };
  location: any;
};

export type LocationResultsType = {
  created: Date;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
};
