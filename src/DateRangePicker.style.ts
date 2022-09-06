import styled, { createGlobalStyle } from "styled-components";

export function createWidgetContainer(outlineColor: string) {
  return styled.div`
    position: relative;

    > *:focus {
      outline: 1px solid ${outlineColor};
    }
  `;
}

export function createDateLibStyle(
  containedColor: string,
  selectedColor: string
) {
  return createGlobalStyle`
    .daterangepicker {
      td.in-range {
        background: ${containedColor};
      }

      .ranges li.active, td.active, td.active:hover {
        background: ${selectedColor};
      }
    }
  `;
}
