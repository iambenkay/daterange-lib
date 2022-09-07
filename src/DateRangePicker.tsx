import React, { useLayoutEffect } from "react";
import { createWidgetContainer } from "./DateRangePicker.style";
import PickerWidget from "daterangepicker";

type PickerRanges = Record<string, [string, string]>;

interface DateRangePickerProps {
  children: JSX.Element;
  format: string;
  from?: string;
  to?: string;
  maxDate?: string;
  minDate?: string;
  onRangeSelected: (from: Date, to: Date) => void;
  autoApply?: boolean;
  alwaysShowCalendars: boolean;
  opens?: "left" | "right" | "center";
  ranges?: PickerRanges;
  separator?: string;
}

const widgetRef = React.createRef<HTMLDivElement>();

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  children,
  from,
  to,
  maxDate,
  minDate,
  format,
  separator = " to ",
  autoApply = true,
  opens = "left",
  ranges = {},
  onRangeSelected,
}) => {
  const WidgetContainer = createWidgetContainer("#ccc");

  useLayoutEffect(() => {
    const widget = new PickerWidget(
      widgetRef.current!,
      {
        startDate: from,
        endDate: to,
        minDate,
        maxDate,
        locale: {
          format,
          separator,
        },
        autoApply,
        opens,
        ranges,
      },
      (from, to) => onRangeSelected(from.toDate(), to.toDate())
    );
    return () => widget.remove();
  }, [from, to, ranges]);

  return <WidgetContainer ref={widgetRef}>{children}</WidgetContainer>;
};

export default DateRangePicker;
