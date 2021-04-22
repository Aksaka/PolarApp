import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const vw = function(ratio) {
    return (width - 100) * ratio / 100;
}

export const vh = function(ratio) {
    return height * ratio / 100;
}


export const isEmpty = function (value) {
  if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
    return true;
  } else {
    return false;
  }
};