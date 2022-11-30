import { Inject, Injectable } from '@nestjs/common'
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate'
import { DatabaseKeys, SortOrder } from 'src/utils/@types/app.types'
import { Repository } from 'typeorm'
import Rentable from './entitites/rentable.entity'
import { RentableNotFoundError } from './types/rentable.erorrs'
import { RentableOrderBy } from './types/rentable.types'

@Injectable()
export class RentableRepository extends Repository<Rentable> {
  constructor(
    @Inject(DatabaseKeys.RENTABLE_REPOSITORY) repository: Repository<Rentable>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }

  findbyIdOrFail(uuid: string): Promise<Rentable> {
    const rentable = this.findOne({
      where: {
        id: uuid,
      },
    })
    if (!rentable) throw new RentableNotFoundError()
    return rentable
  }

  search(
    paginationOptions: IPaginationOptions = { page: 1, limit: 10 },
    order: SortOrder,
    orderBy: RentableOrderBy,
  ): Promise<Pagination<Rentable>> {
    const query = this.createQueryBuilder('rentable')
      .leftJoinAndSelect('rentable.vehicle', 'vehicle')
      .orderBy(orderBy, order)

    return paginate(query, paginationOptions)
  }
}
