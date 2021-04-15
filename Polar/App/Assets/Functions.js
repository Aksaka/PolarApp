import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const vw = function(ratio) {
    return (width - 100) * ratio / 100;
}

export const vh = function(ratio) {
    return height * ratio / 100;
}