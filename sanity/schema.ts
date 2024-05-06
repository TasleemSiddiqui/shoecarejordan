import { type SchemaTypeDefinition } from 'sanity'
import { Services } from './Services'
import { Products } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Services,Products]
}
