import { Injectable } from '@nestjs/common'
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate'
import { SortOrder } from 'src/utils/@types/app.types'
import Vehicle from './entities/vehicle.entiity'
import { VehicleOrderBy } from './types/vehicle.types'
import { VehicleRepository } from './vehicle.repository'

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  addVehicle(vehicle: Partial<Vehicle>): Promise<Vehicle> {
    return this.vehicleRepository.save(vehicle)
  }

  async updateVehicle(vehicle: Partial<Vehicle>) {
    await this.vehicleRepository.findOneByIdOrFail(vehicle.id)
    return this.vehicleRepository.save(vehicle)
  }

  searchVehicles(
    paginationOptions: IPaginationOptions = { page: 1, limit: 10 },
    order: SortOrder,
    orderBy: VehicleOrderBy,
  ): Promise<Pagination<Vehicle>> {
    return this.vehicleRepository.search(paginationOptions, order, orderBy)
  }

  getByIdOrFail(uuid: string): Promise<Vehicle> {
    return this.vehicleRepository.findOneByIdOrFail(uuid)
  }

  deleteVehicle(uuid: string) {
    return this.vehicleRepository.delete({ id: uuid })
  }
}
