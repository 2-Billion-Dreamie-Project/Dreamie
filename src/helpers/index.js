import path from 'path';

export const getFileInfoByName = function(file = '') {
  if (typeof file === 'string' && file !== '') {
    return path.parse(file);
  }

  return '';
}
