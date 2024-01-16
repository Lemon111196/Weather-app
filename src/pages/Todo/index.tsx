import { Button, TextField } from "@mui/material";
import { TextFieldStyle, TodoContainer } from "./style";
import { ChangeEvent, useId, useState } from "react";
import { IProp } from "./interface";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialog from "../../components/Dialog";
import { toast } from "react-toastify";
export default function Todo() {
  const id = useId()
  const [formData, setFormData] = useState<IProp>({
    id,
    todo: "",
    isEdit: false
  });
  const [todo, setTodo] = useState<IProp[]>([]);
  /**
 * @params
 * @return void */
  //!Create
  const onChangeText = (e: ChangeEvent<HTMLInputElement>, isUpdate: boolean = false) => {
    if (isUpdate) {
      setFormData({
        ...formData,
        [e.target?.name]: e.target?.value,
      })
    } else {
      setFormData({
        ...formData,
        id: Math.floor(Math.random() * 1000000000000),
        [e.target?.name]: e.target?.value,
      })
    }
  }
  const createTodo = () => {

    setFormData({
      id,
      todo: "",
      isEdit: false,
    })
    setTodo([...todo, formData])
  }
  //! Delete
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteTodo = () => {
    const deleteData = todo.filter(item => {
      return item.id !== formData.id
    })
    setDeleteModal(false);
    setTodo(deleteData);
  }

  const showDeleteModal = (id: string | number) => {
    const deleteItem = todo.find(item => {
      return item.id === id
    })
    if (deleteItem) {
      setFormData(deleteItem);
    }
    setUpdateModal(false);
    setDeleteModal(true);
  }
  //! Update
  const closeUpdateDialog = () => {
    setFormData({
      id,
      todo: "",
      isEdit: false,
    });
    setUpdateModal(false);
  };
  const updateDialog = () => {
    const updateData = todo.map(item => {
      if (item.id === formData.id) {
        return {
          ...formData,
          todo: formData.todo
        }
      } else {
        return item;
      }
    })
    setTodo(updateData);
    closeUpdateDialog();
  }
  const notify = () => toast.success('Success')
  //! Open modal
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const showModal = (id: string | number) => {
    const updateItem = todo.find(item => { return item.id === id });
    if (updateItem) {
      setFormData(updateItem);
    }
    setUpdateModal(true);

  }
  return (
    <TodoContainer>
      <div className="body">
        <div className="content">
          <TextField
            onChange={onChangeText}
            id="outlined-basic"
            size="small"
            label="Todo"
            variant="outlined"
            name="todo"
            value={formData.todo} />
          <Button onClick={createTodo} className="btn" variant="contained" >Add</Button>
        </div>
        <div className="listItem">
          {todo.map((item, index) => (
            <div className="singleTodo" key={index}>
              <div className="content">
                <span className="todo-no">{index + 1}.</span>
                <span>{item.todo}</span>
              </div>
              <div className="btnGroup">
                <ModeEditOutlineIcon className="edit" onClick={() => showModal(item.id)}></ModeEditOutlineIcon>
                <DeleteOutlineIcon className="delete" onClick={() => showDeleteModal(item.id)}></DeleteOutlineIcon>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={updateModal} title="Update List"
        submitBtn="Update"
        onCancel={closeUpdateDialog}
        onSubmit={updateDialog}>
        <TextFieldStyle
          name="todo"
          value={formData.todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeText(e, true)}>
        </TextFieldStyle>
      </Dialog>
      <Dialog open={deleteModal}
        title="Delete Todo"
        submitBtn="Delete"
        onCancel={closeUpdateDialog}
        onSubmit={deleteTodo}
      >
        <p>Are you sure to delete this?</p>
      </Dialog>
    </TodoContainer>
  )
}
