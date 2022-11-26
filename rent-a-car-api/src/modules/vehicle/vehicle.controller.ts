import {
  Body,
  Controller,
  HttpCode,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Authentication } from '../authentication/decorators/authentication.decorator';
import { authType } from '../authentication/types/authentication.types';
import { User } from '../user/decorators/user.decorator';
import Vehicle from './entities/vehicle.entiity';
import { VehicleService } from './vehicle.service';
import { ApiAddVehicle } from './vehicle.swagger';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @HttpCode(200)
  @ApiAddVehicle()
  @Post('change-password')
  @Authentication(authType.accessToken)
  async addVehicle(
    @User('id', ParseUUIDPipe) userId: string,
    @Body() vehicle: Partial<Vehicle>,
  ) {
    return this.vehicleService.addVehicle(vehicle);
  }
}
