/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import './autoFilterDropdownList.css';

export default function AutoFilterListDropdown({
  data,
  filterKey,
  valueChange,
  placeHolder
}) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChanging = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredData(
      data.filter((item) =>
        item[filterKey].toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsDropdownVisible(true);
  };

  const highlightValue = (value) => {
    const regex = new RegExp(`(${query})`, "gi");
    const textParts = value.split(regex);
    return textParts.map((part, index) =>
      part.toLowerCase() === query.toLocaleLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  const handleSelect = (item) => {
    valueChange(item);
    setQuery(item[filterKey]);
    setFilteredData(data);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="auto-filter-dropdown" ref={dropdownRef}>
      <input
        type="text"
        className="query-dropdown"
        value={query}
        onChange={handleInputChanging}
        placeholder={placeHolder}
        onFocus={() => setIsDropdownVisible(true)}
      />
      {isDropdownVisible && query && (
        <ul className="filtered-data">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li
                key={item[filterKey]}
                className="list-item"
                onClick={() => handleSelect(item)}
              >
                {highlightValue(item[filterKey])}
              </li>
            ))
          ) : (
            <li className="list-item">No results.</li>
          )}
        </ul>
      )}
    </div>
  );
}
