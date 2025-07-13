import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function PriceFilter({ priceRange, setPriceRange }) {
const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  const handleInputChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
  };

  return (
    <div className="w-full mx-auto">
      <Slider
        range
        min={100}
        max={200000}
        step={100}
        value={priceRange}
        onChange={handleSliderChange}
        trackStyle={[{ backgroundColor: "#d096ba", height: 5 }]}
        handleStyle={[
          { borderColor: "#d096ba", height: 15, width: 15, marginTop: -6, backgroundColor: "#d096ba" },
          { borderColor: "#d096ba", height: 15, width: 15, marginTop: -6, backgroundColor: "#d096ba" }
        ]}
        railStyle={{ backgroundColor: "#e5e7eb", height: 4 }}
      />
      <div className="flex items-center justify-between gap-2 mt-4">
        <input
          type="number"
          value={priceRange[0]}
          readOnly
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-1/2 border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="mx-2 text-gray-500">-</span>
        <input
          type="number"
          value={priceRange[1]}
          readOnly
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-1/2 border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
    </div>
  );
}
