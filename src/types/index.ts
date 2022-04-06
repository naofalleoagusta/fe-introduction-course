export type TInput = {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  error?: boolean;
  helperText?: string;
};
