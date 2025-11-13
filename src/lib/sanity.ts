import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'w1644nym',
  dataset: 'production',
  apiVersion: '2023-11-12',
  useCdn: true,
});