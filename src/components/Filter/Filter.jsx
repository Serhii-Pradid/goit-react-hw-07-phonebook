import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectStatusFilter } from "redux/selectors";
import PropTypes from 'prop-types';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);

const handleFilterChange = event => dispatch(filterContacts(event.currentTarget.value));

    return (
    <ul>
        <label> Find contacts by name:
      <input 
      type="text" 
      name="filter"
      value={filter} 
      placeholder='Name Surname'
      onChange={handleFilterChange} />
     </label>
    </ul>
    )
}

Filter.propTypes ={
    value: PropTypes.string,
    onChange: PropTypes.func
}