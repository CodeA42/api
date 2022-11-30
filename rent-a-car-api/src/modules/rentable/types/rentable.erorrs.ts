export class RentableNotFoundError extends Error {
  constructor(message = 'Rentable not found') {
    super(message)
    this.name = 'RentableNotFoundError'
  }
}
