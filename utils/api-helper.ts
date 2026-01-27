// lib/api-helper.ts
import axios, { AxiosResponse, AxiosError } from 'axios';

interface FormattedResponse<T> {
  data: T | null;
  errorMessage: string | null;
  errorCode: number;
}

export function formatResponse<T>(
  result: unknown,
  resource: string = 'resource',
  id: string | number = 'unknown'
): FormattedResponse<T> {
  // 1. On vérifie si c'est une ERREUR Axios
  if (axios.isAxiosError(result)) {
    const error = result as AxiosError;
    const status = error.response?.status || 500;
    let message = 'An unexpected error occurred.';

    if (status === 404) {
      message = `Unable to find ${resource} with id: ${id}`;
    } else if (status === 400) {
      message = 'Invalid data provided.';
    }

    return {
      data: null,
      errorMessage: message,
      errorCode: status,
    };
  }

  // 2. On vérifie si c'est une RÉPONSE Axios (Succès)
  const response = result as AxiosResponse<T>;
  if (response && response.status) {
    return {
      data: response.data,
      errorMessage: null,
      errorCode: response.status,
    };
  }

  // 3. Cas par défaut (Erreur critique non-Axios)
  return {
    data: null,
    errorMessage: 'A critical connection error occurred.',
    errorCode: 500,
  };
}
