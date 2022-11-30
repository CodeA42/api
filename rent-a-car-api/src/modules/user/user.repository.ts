import { Inject, Injectable } from '@nestjs/common'
import { DatabaseKeys } from 'src/utils/@types/app.types'
import { Repository, UpdateResult } from 'typeorm'
import User from './entities/user.entity'
import { UserNotFoundError } from './types/user.errors'

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @Inject(DatabaseKeys.USER_REPOSITORY) repository: Repository<User>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }

  async findByEmailOrFail(email: string): Promise<User> {
    const user: User = await this.findOne({
      where: {
        email,
      },
    })
    if (user) return user
    throw new UserNotFoundError()
  }

  async findByUsernameOrFail(username: string): Promise<User> {
    const user: User = await this.findOne({
      where: {
        username,
      },
    })
    if (user) return user
    throw new UserNotFoundError()
  }

  async findByIdOrFail(id: string): Promise<User> {
    const user: User = await this.findOne({
      where: { id },
    })
    if (user) return user
    throw new UserNotFoundError()
  }

  updateLogoutTime(userId: string): Promise<UpdateResult> {
    return this.update({ id: userId }, { logout: Date.now().toString() })
  }

  async updatePassword(
    userId: string,
    hashedPassword: string,
  ): Promise<UpdateResult> {
    const user = await this.findByIdOrFail(userId)
    return await this.update(user.id, {
      password: hashedPassword,
    })
  }

  async insertUser(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const user = new User()
    user.username = username
    user.password = password
    user.email = email

    return await this.save(user)
  }
}
