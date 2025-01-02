
import landingPage from './landingPage';
import hero from './landingPage-sections/hero';

import { SchemaTypeDefinition } from 'sanity';
import post from './landingPage-sections/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero,  post], // Add post here
};
