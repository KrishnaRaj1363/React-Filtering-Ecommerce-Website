import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="slippers"
          title="Slippers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="formals"
          title="Formals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sports"
          title="Sports"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;