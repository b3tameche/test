import "./SearchBar.css"
import TextField from '@mui/material/TextField'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../reducer/contactsSlice'

const SearchBar = (props) => {
    const {onSearch} = props

    const dispatch = useDispatch()

    const [name, setName ] = useState('')
    const [number, setNumber ] = useState('')

    return (
        <div>
            <div id="searchBox">
                <p id="label">WHO DO YOU WANT?</p>
                <div>
                    <input type="text" placeholder="Search..." onChange={e => onSearch(e.target.value)}/>
                </div>
            </div>
            <div className="adduser">
              <TextField label="Name" size="small" onBlur={(e) => {setName(e.target.value)}} />
              <TextField label="Number" size="small" onBlur={(e) => {setNumber(e.target.value)}} />
              <IconButton size="large" onClick={() => {
                dispatch(addContact({
                  name: name,
                  mobile: number
                }))
                }}>
                <PersonAddAlt1Icon />
              </IconButton>
            </div>
        </div>
    )
}

export default SearchBar