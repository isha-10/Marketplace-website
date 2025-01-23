import { type SchemaTypeDefinition } from 'sanity'
import shop from './shop'
import blog from './blog'
import comment from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [shop,blog,comment],
  
}