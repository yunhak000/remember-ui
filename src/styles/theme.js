const color = {
  primary: "#7A64A1",
  secondary: "#EA8610",
  white: "#fff",
  black: "#1A1A1A",
  etc: {
    1: "#5d5d5d",
    2: "#767676",
    3: "#585858",
    4: "#f6f6f6",
    5: "#bbb",
    6: "#F4F4F4",
  },
};

const breakpoint = {
  DESKTOP: "1200px",
  TABLET: "768px",
  MOBILE: "360px",
};

const breakpoints = {
  down: (_maxBreakpoint) => {
    const max = Number(breakpoint[_maxBreakpoint].replace("px", ""));
    return `@media (max-width: ${max - 0.5}px)`;
  },
};

export const theme = {
  color,
  breakpoints,
};
