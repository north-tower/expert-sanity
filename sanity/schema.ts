import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './schemaTypes/blockContentType'
import {categoryType} from './schemaTypes/categoryType'
import {postType} from './schemaTypes/postType'
import {authorType} from './schemaTypes/authorType'
import { landingPageType } from './schemaTypes/landingPageType'
import { clientType } from './schemaTypes/clientType'
import { detailsType } from './schemaTypes/detailsType'
import { serviceType } from './schemaTypes/serviceType'
import { heroType } from './schemaTypes/heroType'
import { serveType } from './schemaTypes/serveType'
import { growType } from './schemaTypes/growType'
import { tailType } from './schemaTypes/tailType'
import { valueType } from './schemaTypes/valueType'
import { termsType } from './schemaTypes/termsType'
import { careerType } from './schemaTypes/careerType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, landingPageType, clientType,tailType, 
    detailsType, serviceType, heroType,growType, serveType, valueType, termsType, careerType],
}
