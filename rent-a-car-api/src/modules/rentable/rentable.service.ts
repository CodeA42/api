import { Injectable } from '@nestjs/common'
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate'
import { SortOrder } from 'src/utils/@types/app.types'
import { DeleteResult, UpdateResult } from 'typeorm'
import Rentable from './entitites/rentable.entity'
import { RentableRepository } from './rentable.repository'
import { RentableOrderBy } from './types/rentable.types'

@Injectable()
export class RentableService {
  constructor(private readonly rentableRepository: RentableRepository) {}

  addRentable(rentable: Partial<Rentable>): Promise<Rentable> {
    return this.rentableRepository.save(rentable)
  }

  async updateRentable(rentable: Partial<Rentable>): Promise<UpdateResult> {
    await this.rentableRepository.findbyIdOrFail(rentable.id)
    return this.rentableRepository.update({ id: rentable.id }, rentable)
  }

  deleteRentable(uuid: string): Promise<DeleteResult> {
    return this.rentableRepository.delete({ id: uuid })
  }

  getRentable(uuid: string): Promise<Rentable> {
    return this.rentableRepository.findbyIdOrFail(uuid)
  }

  searchRentable(
    paginationOptions: IPaginationOptions = { page: 1, limit: 10 },
    order: SortOrder,
    orderBy: RentableOrderBy,
  ): Promise<Pagination<Rentable>> {
    return this.rentableRepository.search(paginationOptions, order, orderBy)
  }
}
