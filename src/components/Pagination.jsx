import React from "react";
import { Button,ButtonGroup,Select} from '@chakra-ui/react'


const Pagination = ({page,setPage,limit,setLimit}) => {
  
  

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setPage(1)}>FIRST</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>setPage(page-1)}>PREVIOUS</Button>
      <Select data-cy="pagination-limit-select"  onChange={(e) =>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>setPage(page+1)}>NEXT</Button>
      <Button data-cy="pagination-last-button" onClick={()=>setPage(9)}>LAST</Button>
    </ButtonGroup>
  );
};

export default Pagination;
