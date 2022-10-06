

export class Player {
  id!: number;
  firstname!: string;
  lastname!: string;
  shortname!: string;
  sex!: string;
  picture!: string;

  data!: Data;
  country!: Country;
}

export class Country {
  code!: string;
  picture!: string;
}

export class Data {
  age!: number;
  weight!: number;
  height!: number;
  last!: number[];
  rank!: number;
  points!: number;

}