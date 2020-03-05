export const getChartWidth = (width) => {
  switch (width) {
    case 'xs':
      // code block
      return 400;
    case 'sm':
      // code block
      return 600;
    case 'md':
      return 900;
    case 'lg':
      return 1200;
    case 'xl':
      return 1860;
    default:
      return 1300;
  }
};

export const getChartHeight = (width) => {
  switch (width) {
    case 'xs':
      // code block
      return 75;
    case 'sm':
      // code block
      return 100;
    case 'md':
      return 100;
    case 'lg':
      return 180;
    case 'xl':
      return 250;
    default:
      return 250;
  }
};
