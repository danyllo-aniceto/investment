export function simulatorApiRequest<T>(data: T, simulatorError: boolean = false): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulatorError) {
        reject(new Error('Erro simulado'));
      }

      resolve(data);
    }, 2000);
  });
}
