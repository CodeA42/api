import { DatabaseKeys } from 'src/utils/@types/app.types'
import { DataSource } from 'typeorm'
import Rentable from './rentable.entity'

export const RentableRepositoryProvider = {
  provide: DatabaseKeys.RENTABLE_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Rentable),
  inject: [DatabaseKeys.DATA_SOURCE],
}
