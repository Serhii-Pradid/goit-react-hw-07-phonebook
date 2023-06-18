import { useSelector, useDispatch } from 'react-redux';
import { filterContacts , getFilterList } from 'redux/filterSlice';
import PropTypes from 'prop-types';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterList);

    const handleFilterChange = event => dispatch(filterContacts(event.currentTarget.value));

    return (
    <ul>
        <label> Find contacts by name:
      <input 
      type="text" 
      value={filter} 
      placeholder='Name Surname'
      onChange={handleFilterChange} />
     </label>
    </ul>
    )
}

Filter.propTypes ={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}