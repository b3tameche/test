import { useSelector } from 'react-redux'
import Mininfo from "./Contact";

const ContactsList = (props) => {
  const { query } = props

  const contacts = useSelector(state => state.contacts.value)

  return(
    contacts.filter(entry => entry.name.toLowerCase().includes(query) || entry.mobile.includes(query)).map(info =>
      <Mininfo
          name={info.name}
          mobile={info.mobile}
      ></Mininfo>
  )
  )
}

export default ContactsList
