import { Inject, Injectable } from '@nestjs/common'
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate'
import { DatabaseKeys, SortOrder } from 'src/utils/@types/app.types'
import { Repository } from 'typeorm'
import Vehicle from './entities/vehicle.entiity'
import { VehicleNotFoundError } from './types/vehicle.errors'
import { VehicleOrderBy } from './types/vehicle.types'

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  constructor(
    @Inject(DatabaseKeys.VEHICLE_REPOSITORY) repository: Repository<Vehicle>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }

  async findOneByIdOrFail(id: string): Promise<Vehicle> {
    const vehicle = await this.findOne({
      where: {
        id,
      },
    })
    if (!vehicle) throw new VehicleNotFoundError()
    return vehicle
  }

  search(
    paginationOptions: IPaginationOptions = { page: 1, limit: 10 },
    order: SortOrder,
    orderBy: VehicleOrderBy,
  ): Promise<Pagination<Vehicle>> {
    const query = this.createQueryBuilder('vehicle').orderBy(
      `${orderBy}`,
      order,
    )

    return paginate(query, paginationOptions)
  }
}
