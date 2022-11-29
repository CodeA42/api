export class VehicleNotFoundError extends Error {
  constructor(message = 'Vehicle not found') {
    super(message)
    this.name = 'VehicleNotFoundError'
  }
}
