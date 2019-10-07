/* eslint-disable camelcase */
/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export function convertBytesToHuman(bytes) {
if( ! (typeof bytes == "number" && Number.isInteger(bytes) && bytes >= 0)) {
  return false
}

let readable_bytes = bytes

  let power = 0
  while(readable_bytes >= 1023.995){
    readable_bytes /= 1024
    power += 1
  }

readable_bytes = Math.round(100*readable_bytes)/100

  let units_word = 'B'
  switch (power) {
    case 0:
      break
    case 1:
      units_word = 'KB'
      break
    case 2:
      units_word = 'MB'
      break
  case 3:
      units_word = 'GB'
      break
  case 4:
      units_word = 'TB'
      break
  case 5:
      units_word = 'PB'
      break
  case 6:
    units_word = 'EB'
    break
  case 7:
    units_word = 'ZB'
    break
  case 8:
    units_word = 'YB'
    break
  default:
    units_word = 'Extremely large units'
    break
  }

  return `${readable_bytes  } ${  units_word}`
}
