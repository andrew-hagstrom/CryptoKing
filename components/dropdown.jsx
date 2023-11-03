import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown({name, price}) {
  
   console.log(name)
    return (
    <>
     
      {['Rank 1'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">{name[0]}</Dropdown.Item>
            <Dropdown.Item eventKey="1">{price[0]}</Dropdown.Item>
            {/* <Dropdown.Item eventKey="3" active>
              Active Item */}
            {/* </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
          </DropdownButton>
        ),
      )}
       {['Rank 2'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="2">{name[1]}</Dropdown.Item>
            <Dropdown.Item eventKey="2">{price[1]}</Dropdown.Item>
            {/* <Dropdown.Item eventKey="3" active>
              Active Item */}
            {/* </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
          </DropdownButton>
        ),
      )}
    </>
  );
}

export default DropDown;