import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTask = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal title="Add Task" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="w-full rounded-md"
              type="text"
              {...register("title")}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              className="w-full rounded-md"
              {...register("description")}
            ></textarea>
          </div>
          <div>
            <label htmlFor="date">Deadline:</label>
            <input
              id="date"
              className="w-full rounded-md"
              type="date"
              {...register("date")}
            />
          </div>
          <div>
            <label htmlFor="assign">Assign to:</label>
            <select
              id="assign"
              className="w-full rounded-md"
              type="text"
              {...register("assignedTo")}
            >
              <option value="Mir Hossain">Mir Hossain</option>
              <option value="Abul Gafer">Abul Gafer</option>
              <option value="Md Kagal">Md Kajal</option>
              <option value="Md Naim">Md Naim</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              className="w-full rounded-md"
              type="text"
              {...register("priority")}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={onCancel} className="btn btn-danger">
              Cancel
            </button>

            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTask;
