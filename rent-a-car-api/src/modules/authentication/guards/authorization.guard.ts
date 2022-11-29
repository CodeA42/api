import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'

@Injectable()
export class AuthorizationGurad implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())

    if (!roles) {
      return true
    }

    const isAuthorized = true //If none of the guards stop the user he is free to proceed

    const req: Request = context.switchToHttp().getRequest()
    const userId = req.user.id

    if (roles.includes('admin')) {
    }

    return isAuthorized
  }
}
