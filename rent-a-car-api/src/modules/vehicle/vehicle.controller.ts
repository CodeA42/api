import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { Pagination } from 'nestjs-typeorm-paginate'
import { SortOrder } from 'src/utils/@types/app.types'
import { DeleteResult } from 'typeorm'
import { Authentication } from '../authentication/decorators/authentication.decorator'
import { Roles } from '../authentication/decorators/roles.decorator'
import { authType } from '../authentication/types/authentication.types'
import { userRole } from '../user/types/user.types'
import Vehicle from './entities/vehicle.entiity'
import { VehicleOrderByPipe } from './pipes/vehicle.pipe'
import { VehicleOrderBy } from './types/vehicle.types'
import { VehicleService } from './vehicle.service'
import {
  ApiAddVehicle,
  ApiDeleteVehicle,
  ApiUpdateVehicle,
} from './vehicle.swagger'

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @HttpCode(204)
  @ApiAddVehicle()
  @Get()
  @Authentication(authType.accessToken)
  async searchVehicles(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('order') order: SortOrder = 'DESC',
    @Query('orderBy', VehicleOrderByPipe)
    orderBy: VehicleOrderBy = VehicleOrderBy.updatedAt,
  ): Promise<Pagination<Vehicle>> {
    return this.vehicleService.searchVehicles({ page, limit }, order, orderBy)
  }

  @HttpCode(204)
  @ApiAddVehicle()
  @Get(':uuid')
  @Authentication(authType.accessToken)
  async getVehicle(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.vehicleService.getByIdOrFail(uuid)
  }

  @HttpCode(200)
  @ApiAddVehicle()
  @Post()
  @Authentication(authType.accessToken)
  async addVehicle(@Body() vehicle: Partial<Vehicle>) {
    return this.vehicleService.addVehicle(vehicle)
  }

  @HttpCode(204)
  @ApiUpdateVehicle()
  @Put()
  @Authentication(authType.accessToken)
  async updateVehicle(@Body() vehicle: Partial<Vehicle>): Promise<Vehicle> {
    return this.vehicleService.updateVehicle(vehicle)
  }

  @HttpCode(200)
  @ApiDeleteVehicle()
  @Delete(':uuid')
  @Roles(userRole.admin)
  @Authentication(authType.accessToken)
  async deleteVehicle(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<DeleteResult> {
    return this.vehicleService.deleteVehicle(uuid)
  }
}
