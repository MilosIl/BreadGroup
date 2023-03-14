export interface IUser {
  username: string;
  password: string;
  city: string;
  phoneNumber: number;
  pets: IPet[];
  publicAds: string[];
}

export interface IPet {
  // owner: Pick<IUser, 'username'>;
  owner: string;
  species: TSpecies;
  race: string;
  description: string;
  gender: TGender;
  age: number;
  isForAdoption: boolean;
  isForBreeding: boolean;
  pedigree: boolean;
}

export interface publicAd {
  owner: Pick<IUser, 'username'>;
  nameAd: string;
  description: string;
  pet: IPet;
  createAd: number;
  editAd: number;
}

export type TSpecies = 'pas' | 'macka' | 'ptica';
export type TGender = 'muzijak' | 'zenka';
