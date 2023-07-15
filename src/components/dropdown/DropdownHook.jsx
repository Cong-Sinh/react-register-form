/* eslint-disable react/prop-types */
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hook/useClickOutSide";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "click vao day de chon dao`",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setlabel(e.target.textContent);
  };
  const [label, setlabel] = useState(dropdownLabel);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="Teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="Developer"
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="Doctor"
        >
          Doctor
        </div> */}
      </div>
    </div>
  );
};

export default DropdownHook;
