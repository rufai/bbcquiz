import { useState } from "react";
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleToggle}>Click To See List Of Countries</button>
      {isOpen && (
        <ul>
          <li>China</li>
          <li>India</li>
          <li>United States</li>
          <li>Indonesia</li>
          <li>Pakistan</li>
          <li>Brazil</li>
          <li>Nigeria</li>
          <li>Bangladesh</li>
          <li>Russia</li>
          <li>Mexico</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
