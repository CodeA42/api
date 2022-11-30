import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { authType } from '../authentication/types/authentication.types'

export function ApiAddRentable() {
  return applyDecorators(
    ApiCreatedResponse({ description: 'Rentable createdSuccessfully' }),
    ApiForbiddenResponse({
      description: 'Insuficcient permissions',
    }),
    ApiBearerAuth(authType.accessToken),
  )
}

export function ApiSearchRentable() {
  return applyDecorators(ApiOkResponse({ description: 'Rentable result' }))
}
