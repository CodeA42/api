import { Module } from '@nestjs/common'
import { RentableRepositoryProvider } from './entitites/rentable.provider'
import { RentableController } from './rentable.controller'
import { RentableRepository } from './rentable.repository'
import { RentableService } from './rentable.service'

@Module({
  providers: [RentableRepository, RentableRepositoryProvider, RentableService],
  controllers: [RentableController],
  exports: [RentableService],
})
export class RentableModule {}
