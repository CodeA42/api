import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { authType } from '../authentication/types/authentication.types';

export function ApiAddVehicle() {
  return applyDecorators(
    ApiCreatedResponse({ description: 'Password changed successfully' }),
    ApiForbiddenResponse({
      description: 'Cannot add vehicle with current permission',
    }),
    ApiBearerAuth(authType.accessToken),
  );
}
