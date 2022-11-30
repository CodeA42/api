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
  UseGuards,
} from '@nestjs/common'
import { AuthenticationGuard } from 'src/modules/authentication/guards/authentication.guard'
import { Authentication } from 'src/modules/authentication/decorators/authentication.decorator'
import { authType } from 'src/modules/authentication/types/authentication.types'
import { ApiAddRentable, ApiSearchRentable } from './rentable.swagger'
import { SortOrder } from 'src/utils/@types/app.types'
import { RentableOrderByPipe } from './pipes/rentableOrderByPipe'
import { RentableOrderBy } from './types/rentable.types'
import Rentable from './entitites/rentable.entity'
import { Pagination } from 'nestjs-typeorm-paginate'
import { RentableService } from './rentable.service'
import { Roles } from '../authentication/decorators/roles.decorator'
import { userRole } from '../user/types/user.types'
import { DeleteResult, UpdateResult } from 'typeorm'

@Controller('rentable')
@UseGuards(AuthenticationGuard)
export class RentableController {
  constructor(private readonly rentableService: RentableService) {}

  @HttpCode(200)
  @Delete(':uuid')
  @Roles(userRole.admin)
  @Authentication(authType.accessToken)
  async deleteRentable(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<DeleteResult> {
    return this.rentableService.deleteRentable(uuid)
  }

  @HttpCode(204)
  @Put()
  @Roles(userRole.admin)
  @Authentication(authType.accessToken)
  async updateRentable(
    @Body() rentable: Partial<Rentable>,
  ): Promise<UpdateResult> {
    return this.rentableService.updateRentable(rentable)
  }

  @HttpCode(200)
  @Post()
  @ApiAddRentable()
  @Roles(userRole.admin)
  @Authentication(authType.accessToken)
  async addRentable(@Body() rentable: Partial<Rentable>): Promise<Rentable> {
    return this.rentableService.addRentable(rentable)
  }

  @HttpCode(204)
  @Get(':uuid')
  async getRentable(
    @Param('uuid', ParseUUIDPipe) uuid: string,
  ): Promise<Rentable> {
    return this.rentableService.getRentable(uuid)
  }

  @HttpCode(204)
  @ApiSearchRentable()
  @Get()
  async searchRentable(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('order') order: SortOrder = 'DESC',
    @Query('orderBy', RentableOrderByPipe)
    orderBy: RentableOrderBy = RentableOrderBy.updatedAt,
  ): Promise<Pagination<Rentable>> {
    return this.rentableService.searchRentable({ page, limit }, order, orderBy)
  }
}
