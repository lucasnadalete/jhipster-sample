import dayjs from 'dayjs';
import { ICompany } from 'app/shared/model/company.model';
import { Language } from 'app/shared/model/enumerations/language.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string | null;
  hireDate?: string | null;
  salary?: number | null;
  commissionPct?: number | null;
  likedIn?: string | null;
  language?: Language | null;
  company?: ICompany | null;
}

export const defaultValue: Readonly<IEmployee> = {};
