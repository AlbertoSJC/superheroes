import type { KEY_PARAMETERS } from '@models/typesFile';
import axios from 'axios';
import { ENV_VARIABLE } from 'src/env';

export const fetchApiKeyDetails = async (apiKeyId: string): Promise<KEY_PARAMETERS> => {
  try {
    const response = await axios.get(`${ENV_VARIABLE.PUBLIC_BASE_API_URL}/api-keys/${apiKeyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching API key details:', error);
    throw error;
  }
};
