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
    const req: Request = context.switchToHttp().getRequest()
    const user = req.user
    if (user.role === 'admin') {
      return true
    }
    return !roles.includes('admin')
  }
}
