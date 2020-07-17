export const endWorld = (count: number) => {
  if (count === 1) {
    return 'пассажир';
  } else if (count > 1 && count <= 4) {
    return 'пассажира';
  } else {
    return 'пассажиров';
  }
}