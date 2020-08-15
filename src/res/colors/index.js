function alphaToHex({ color = '', alpha = 100 }) {
  const values = {
    100: 'FF',
    95: 'F2',
    90: 'E6',
    85: 'D9',
    80: 'CC',
    75: 'BF',
    70: 'B3',
    65: 'A6',
    60: '99',
    55: '8C',
    50: '80',
    45: '73',
    40: '66',
    35: '59',
    30: '4D',
    25: '40',
    20: '33',
    15: '26',
    10: '1A',
    5: '0D',
    0: '00',
  }

  return color + values[alpha]
}

export const COLORS = {
  WHITE: '#FFFFFF',
  SILVER: '#CCCCCC',
  BLACK: '#000000',
  RED: '#FF0000',
  ALTO: '#DBDBDB',
  GREY: '#D6D6D6',
  DOVE_GRAY: '#707070',
  WILD_SAND: '#F6F6F6',
  GREEN: '#00CD60',
  CARIBBEAN_GREEN: '#00C2B0',
  WHITE_OPACITY_80: alphaToHex({ color: '#FFFFFF', alpha: 80 }),
}
