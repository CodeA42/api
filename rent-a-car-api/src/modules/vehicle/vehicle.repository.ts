import { Inject, Injectable } from '@nestjs/common';
import { DatabaseKeys } from 'src/@types/app.types';
import { Repository } from 'typeorm';
import Vehicle from './entities/vehicle.entiity';
import { VehicleNotFoundError } from './types/vehicle.errors';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  constructor(
    @Inject(DatabaseKeys.VEHICLE_REPOSITORY) repository: Repository<Vehicle>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findOneByIdOrFail(id: string) {
    const foundVehicle = await this.findOne({
      where: {
        id,
      },
    });
    if (!foundVehicle) throw new VehicleNotFoundError();
  }
}
