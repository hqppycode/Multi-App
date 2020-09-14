import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add here"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>

      <style jsx>{`
        button {
          border: 0;
          outline: 0;
          cursor: pointer;
          font-size: 18px;
        }

        .todo button {
          color: #f37070;
          background: transparent;
        }

        input {
          background: #fff;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
          padding: 7px 10px;
          font-size: 0.5em;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          color: #000;
          outline: 0;
          border: 0;
          flex: 1;
        }

        form {
          border-top: 1px solid;
          display: flex;
          padding-top: 10px;
          margin-top: 10px;
          margin-bottom: 5rem;
        }

        form button {
          color: #2980b9;
          background: #fff;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border-left: 1px solid #ccc;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
          padding: 0 15px;
        }
      `}</style>
    </form>
  );
};

export default AddTaskForm;
