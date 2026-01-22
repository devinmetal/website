import React, { useRef, useState, useEffect } from "react";

interface TableSection {
  title: string;
  columns: string[];
  values: string[];
}

interface DynamicTableProps {
  data: TableSection[];
}

const MIN_COL_WIDTH = 100;

const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-16 font-body">
      {data.map((section, idx) => (
        <TableSectionComponent key={idx} section={section} />
      ))}
    </div>
  );
};

interface TableSectionComponentProps {
  section: TableSection;
}

const TableSectionComponent: React.FC<TableSectionComponentProps> = ({
  section,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const checkScrollable = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      setShowScrollIndicator(el.scrollWidth > el.clientWidth);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [section]);

  const colCount = section.columns.length;

  return (
    <div className="w-full relative">
      {/* TITLE */}
      <h2 className="
    text-center
    text-xl sm:text-2xl md:text-3xl
    font-heading font-semibold
    mb-6 sm:mb-8
    tracking-normal md:tracking-tight
    break-words
    px-2
  ">
        {section.title}
      </h2>

      {/* TABLE */}
      <div
        ref={scrollRef}
        onScroll={checkScrollable}
        className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${colCount}, minmax(${MIN_COL_WIDTH}px, 1fr))`,
          }}
        >
          {/* HEADER */}
          {section.columns.map((col, i) => (
            <div
              key={i}
              className="
    px-3 py-2
    text-center
    text-xs sm:text-sm
    font-medium font-body
    border-r last:border-r-0
    bg-gray-50
    break-words whitespace-normal
    leading-snug
  "
            >
              {col}
            </div>
          ))}

          {/* VALUES */}
          {section.values.map((val, i) => (
            <div
              key={i}
              className="
                px-3 py-2
                text-center
                text-xs sm:text-sm
                font-body text-gray-700
                border-r last:border-r-0
                break-words whitespace-normal
                leading-snug
              "
            >
              {val}
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      {showScrollIndicator && (
        <div className="mt-3 mx-auto px-4 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full shadow font-body w-max">
          ← Tabloyu yatay kaydırabilirsiniz →
        </div>
      )}

      {/* MOBILE HINT */}
      <p className="mt-2 text-xs text-gray-400 text-center md:hidden font-body">
        ← Tabloyu yatay kaydırabilirsiniz →
      </p>
    </div>
  );
};

export default DynamicTable;
