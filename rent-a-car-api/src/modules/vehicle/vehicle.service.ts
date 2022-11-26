import { Injectable } from '@nestjs/common';
import Vehicle from './entities/vehicle.entiity';
import { VehicleRepository } from './vehicle.repository';

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  addVehicle(vehicle: Partial<Vehicle>) {
    return this.vehicleRepository.save(vehicle);
  }

  async updateVehicle(vehicle: Partial<Vehicle>) {
    const foundVehicle = await this.vehicleRepository.findOne({
      where: {
        id: vehicle.id,
      },
    });
    return this.vehicleRepository.save(foundVehicle);
  }
}
