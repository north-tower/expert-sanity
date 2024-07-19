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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, landingPageType, clientType, detailsType, serviceType, heroType],
}
