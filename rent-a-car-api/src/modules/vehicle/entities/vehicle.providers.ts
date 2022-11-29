import { DatabaseKeys } from 'src/utils/@types/app.types'
import { DataSource } from 'typeorm'
import Vehicle from './vehicle.entiity'

export const userRepositoryProvider = {
  provide: DatabaseKeys.VEHICLE_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Vehicle),
  inject: [DatabaseKeys.DATA_SOURCE],
}
