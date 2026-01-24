import { defineConfig } from 'sanity'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'PVM Sports Hub',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})