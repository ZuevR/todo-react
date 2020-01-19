import React, { useContext, useState } from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { ListContext } from '../context/ListContext';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const Task = ({ item }) => {
  const { toggleStatus, removeTask, updateTask } = useContext(ListContext);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(item.description);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDescription(item.description);
  };

  const handleSubmit = () => {
    updateTask({ id: item.id, description, status: item.status })();
    setOpen(false);
  };

  const handleChange = ({ target: { value } }) => {
    setDescription(value);
  };

  return (
    <>
      <ListItem
        dense
        button
        disableRipple
        onClick={toggleStatus({ id: item.id, description, status: !item.status })}
      >
        <ListItemIcon>
          <Checkbox
            color="primary"
            checked={item.status}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={item.id} primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={handleClickOpen}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton edge="end" aria-label="comments" onClick={removeTask(item.id)}>
            <DeleteIcon style={{ color: '#b91111' }} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            autoFocus
            placeholder="Edit task description"
            fullWidth
            value={description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Task;
