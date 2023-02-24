export interface IUser {
  username: string;
  password: string;
  city: string;
  phoneNumber: number;
  pets: string[];
  publicAds: string[];
}
export type TPet = {
  owner: IUser;
  species: TSpecies;
  isForAdoption: boolean;
  isForBreeding: boolean;
};
export type TSpecies = 'dog' | 'cat' | 'fish' | 'bird';
