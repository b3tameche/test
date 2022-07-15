import "./Contact.css"
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { deleteContact, updateContact } from '../reducer/contactsSlice'
import { useDispatch } from 'react-redux'
import { useState } from "react";

const Contact = (props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  return (
    <div id="mininfo">
        <div className="info">
          <p id="name">{props.name}</p>
          <p id="mobile">{props.mobile}</p>
        </div>
        <div className="updelete">
          <TextField label="Name" size="small" onBlur={(e) => {setName(e.target.value)}} />
          <TextField label="Number" size="small" onBlur={(e) => {setNumber(e.target.value)}} />
          <Button variant='contained' component='label' onClick={() => {
            dispatch(updateContact({
              name: props.name,
              mobile: props.mobile,
              newN: name,
              newM: number
            }))
          }}> Update
          </Button>
          <IconButton size="large" onClick={() => {
            dispatch(deleteContact({
              name: props.name,
              mobile: props.mobile,
            }))
          }}>
            <DeleteIcon fontSize='inherit' />
          </IconButton>
        </div>
    </div>
  )
}

export default Contact