import { ICountry } from 'app/shared/model/country.model';
import { IState } from 'app/shared/model/state.model';
import { ICity } from 'app/shared/model/city.model';
import { IEmployee } from 'app/shared/model/employee.model';
import { Language } from 'app/shared/model/enumerations/language.model';

export interface ICompany {
  id?: number;
  name?: string;
  cnpj?: string;
  language?: Language | null;
  country?: ICountry | null;
  state?: IState | null;
  city?: ICity | null;
  employees?: IEmployee[] | null;
}

export const defaultValue: Readonly<ICompany> = {};
