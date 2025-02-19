import { AxiosError } from 'axios';

export function emitAlert(error: unknown, messageCustom: string) {
  if (error instanceof AxiosError) {
    alert(error?.response?.data?.message ?? messageCustom);
    return;
  }
  alert(messageCustom);
}
