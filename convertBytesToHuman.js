/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function convertBytesToHuman(bytes) {
if(typeof bytes != "number" || ! isInteger(bytes) ||bytes < 0) {
  return false;
}

  let units = 1;
  while(bytes > 1023){
    bytes /= 1024;
    units *= 1024;
  }

bytes = round(100*bytes)/100;

  let units_word = 'B';
  switch (units) {
    case 1:
      break;
    case 1024:
      units_word = 'KB';
      break;
    case 1024**2:
      units_word = 'MB';
      break;
  case 1024**3:
      units_word = 'GB';
      break;
  case 1024**4:
      units_word = 'TB';
      break;
  case 1024**5:
      units_word = 'PB';
      break;
  case 1024**6:
    units_word = 'EB';
    break;
  case 1024**7:
    units_word = 'ZB';
    break;
  case 1024**8:
    units_word = 'YB';
    break;
  default:
    units_word = 'Extremely large units';
    break;
  }

  return `{$reduced} {$units_word}`;
}