import { Module } from '@nestjs/common'
import { VehicleService } from './vehicle.service'
import { VehicleController } from './vehicle.controller'
import { vehicleRepositoryProvider } from './entities/vehicle.providers'
import { VehicleRepository } from './vehicle.repository'

@Module({
  providers: [VehicleService, vehicleRepositoryProvider, VehicleRepository],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
