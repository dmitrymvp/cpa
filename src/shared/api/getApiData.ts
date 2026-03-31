import axios from 'axios';
import type { Lang } from '@shared/types/language';

const BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;
const API_KEY = import.meta.env.PUBLIC_API_KEY;

export const getApiData = async <T>(lang: Lang, endpoint: string): Promise<T> => {
  const res = await axios.get(`${BASE_URL}/${lang}/${endpoint}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  return res.data;
};
