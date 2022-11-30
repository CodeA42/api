import { Module } from '@nestjs/common'
import { VehicleService } from './vehicle.service'
import { VehicleController } from './vehicle.controller'
import { VehicleRepositoryProvider } from './entities/vehicle.provider'
import { VehicleRepository } from './vehicle.repository'

@Module({
  providers: [VehicleService, VehicleRepositoryProvider, VehicleRepository],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
