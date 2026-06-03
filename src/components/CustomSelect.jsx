import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const CustomSelect = ({
  value,
  setValue,
  isOpen,
  toggle,
  options,
  placeholder,
  clearError,
}) => {
  return (
    <div className=" relative">
      <button
        type="button"
        onClick={() => {
          toggle();
        }}
        className="
                    
              h-10
              px-3
              w-full
              rounded-xl
              bg-(--bg)
              border
              border-(--border)
              text-(--text-muted)/60
               appearance-none
               flex
               gap-2
               justify-center items-center
             
            "
      >
        {value || placeholder}
        {isOpen === placeholder ? (
          <RiArrowUpSLine className="translate-0.5" />
        ) : (
          <RiArrowDownSLine className="translate-0.5" />
        )}
      </button>
      {isOpen === placeholder && (
        <ul className="absolute border z-50 rounded-xl   w-full top-full mt-1 border-(--bg) shadow-(--shadow-m) bg-(--surface)">
          {options.map((option) => (
            <li
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                setValue(option);
                toggle();
                clearError();
              }}
              className="flex justify-center items-center  hover:bg-(--bg) h-10"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
