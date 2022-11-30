import { ArgumentsHost, Catch, HttpException, HttpStatus } from '@nestjs/common'
import { UserNotFoundError } from 'src/modules/user/types/user.errors'
import { VehicleNotFoundError } from 'src/modules/vehicle/types/vehicle.errors'
import GenericErrorFilter from './generic.filter'

@Catch(UserNotFoundError, VehicleNotFoundError)
export default class NotFoundErrorFilter extends GenericErrorFilter {
  catch(err: any, host: ArgumentsHost) {
    const response = {
      statusCode: HttpStatus.NOT_FOUND,
      message: err.message,
    }

    super.catch(new HttpException(response, response.statusCode), host)
  }
}
