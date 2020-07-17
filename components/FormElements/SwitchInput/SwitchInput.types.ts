export type TSwitchInput = {
  onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  value: string;
  classmod: string;
  children: string;
  name?: string;
  isActive: boolean;
};
