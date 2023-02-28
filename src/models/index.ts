export interface IUser {
  username: string;
  password: string;
  city: string;
  phoneNumber: number;
  pets: IPet[];
  publicAds: string[];
}

export interface IPet {
  owner: Pick<IUser, 'username'>;
  species: TSpecies;
  isForAdoption: boolean;
  isForBreeding: boolean;
  gender: TGender;
  age: number;
  race: string;
  description: string;
  pedigree: boolean;
}


export interface publicAd{
  owner:Pick<IUser,'username'>;
  nameAd:string;
  description:string,
  pet:IPet,
}

export type TSpecies = 'dog' | 'cat' | 'fish' | 'bird';
export type TGender = 'male' | 'female';
