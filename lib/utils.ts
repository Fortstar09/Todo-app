export const MARGIN = 10;
export const ITEM_HEIGHT = 60; // height per todo

export const getPosition = (order: number) => {
  "worklet";
  return { x: 0, y: order * (ITEM_HEIGHT + MARGIN) };
};

export const getOrder = (x: number, y: number) => {
  "worklet";
  return Math.round(y / (ITEM_HEIGHT + MARGIN));
};
