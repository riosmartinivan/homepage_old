export interface Position {
  x: number
  y: number
}

export interface CollisionData {
  position: Position
  surfaceAngle: number
  restitution: number
}

interface CollisionResponse {
  destination: Position
  speed: number
}

export function calculateCollisionDestination(
  position: Position,
  destination: Position,
  collisionData: CollisionData,
  speed: number,
  distance: number,
): CollisionResponse {
  const trajectoryAngle = getInclinationAngle(position, destination)

  const collisionAngle = trajectoryAngle - collisionData.surfaceAngle
  const objectReflectionAngle = 180 - collisionAngle
  const reflectionAngle = mod(objectReflectionAngle - (180 - collisionData.surfaceAngle), 360)

  return {
    destination: {
      x: collisionData.position.x - Math.cos(toRadians(reflectionAngle)) * (distance * collisionData.restitution),
      y: collisionData.position.y - Math.sin(toRadians(reflectionAngle)) * (distance * collisionData.restitution),
    },
    speed: speed * collisionData.restitution,
  }
}

export function distanceBetweenPositions(position: Position, destination: Position) {
  return Math.sqrt(Math.pow(position.x - destination.x, 2) + Math.pow(position.y - destination.y, 2))
}

export function toDegrees(angle: number): number {
  return angle * (180 / Math.PI)
}

export function toRadians(angle: number): number {
  return angle * (Math.PI / 180)
}

interface Circle {
  radius: number
  center: Position
}

interface Line {
  start: Position
  end: Position
}

export function getCircleCircleIntersectionPoints(c1: Circle, c2: Circle): Position[] {
  const distanceBetweenCenters = distanceBetweenPositions(c1.center, c2.center)
  if (distanceBetweenCenters > c1.radius + c2.radius) return [] // No intersection points

  const intersectionCenterDistance =
    (Math.pow(c1.radius, 2) - Math.pow(c2.radius, 2) + Math.pow(distanceBetweenCenters, 2)) /
    (2 * distanceBetweenCenters)

  const intersectionCenter: Position = {
    x: c1.center.x + (intersectionCenterDistance * (c2.center.x - c1.center.x)) / distanceBetweenCenters,
    y: c1.center.y + (intersectionCenterDistance * (c2.center.y - c1.center.y)) / distanceBetweenCenters,
  }

  const intersectionHeight = Math.sqrt(Math.pow(c1.radius, 2) - Math.pow(intersectionCenterDistance, 2))

  const intersectionPoint1: Position = {
    x: intersectionCenter.x + (intersectionHeight * (c2.center.y - c1.center.y)) / distanceBetweenCenters,
    y: intersectionCenter.y - (intersectionHeight * (c2.center.x - c1.center.x)) / distanceBetweenCenters,
  }
  if (intersectionHeight === 0) return [intersectionPoint1] // Only one intersection point

  const intersectionPoint2: Position = {
    x: intersectionCenter.x - (intersectionHeight * (c2.center.y - c1.center.y)) / distanceBetweenCenters,
    y: intersectionCenter.y + (intersectionHeight * (c2.center.x - c1.center.x)) / distanceBetweenCenters,
  }

  return [intersectionPoint1, intersectionPoint2]
}

export function getInclinationAngle(p1: Position, p2: Position): number {
  return toDegrees(Math.atan2(p2.y - p1.y, p2.x - p1.x)) + 180
}

export function mod(num: number, divisor: number): number {
  return ((num % divisor) + divisor) % divisor
}

export function getCircleLineIntersectionPoints(circle: Circle, line: Line): Position[] {
  return [] // TODO
}
