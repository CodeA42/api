import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'
import { VehicleOrderBy } from '../types/vehicle.types'

@Injectable()
export class VehicleOrderByPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, metadata: ArgumentMetadata) {
    // Gets string value from SortByField enum
    return VehicleOrderBy[value as keyof typeof VehicleOrderBy]
  }
}
