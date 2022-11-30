export {}

declare module 'express' {
  interface Request {
    user: {
      id: string
      username: string
      email: string
      role: string
    }
  }
}

export type JwtPayload = {
  user: TokenUser
  iat: number
  exp: number
}
