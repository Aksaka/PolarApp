export const apiUrl = "http://54.180.90.8:8080/"; 

export const IamPortCode = "imp80973478";//My Seller code of IamPort


export function getUserCode(pg) {
  switch(pg) {
    case 'kakao':
      return 'imp10391932';
    case 'paypal':
      return 'imp09350031';
    case 'mobilians':
      return 'imp60029475';
    case 'naverco':
    case 'naverpay':
      return 'imp41073887';
    default:
      return 'imp19424728';
  }
}

export const colors = {
	white: '#ffffff',
	black: '#000000',
	grey_0: '#d5d5d5',
	grey_1: '#a6a6a6',
	red: '#e84118',
	blue: '#3679fe',
	skyblue: '#87cdfa',
}