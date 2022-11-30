import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'
import { RentableOrderBy } from '../types/rentable.types'

@Injectable()
export class RentableOrderByPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, metadata: ArgumentMetadata) {
    // Gets string value from SortByField enum
    return RentableOrderBy[value as keyof typeof RentableOrderBy]
  }
}
