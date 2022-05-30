import React, { useState } from "react";
import { Button,Input,RadioGroup,Select,Radio ,Modal, ModalBody, useDisclosure} from '@chakra-ui/react'


const AddProduct = () => {

const {isOpen,onOpen,onClose}= useDisclosure()

  const [formData,setFormData] = useState([]);

    const handleChange = (e)=>{
        const inputName = e.target.name;
  
        if(e.target.type === "checkbox"){
           setFormData({ ...formData,[inputName]:e.target.checked}) ;
        }
        else if(e.target.type === "file"){

            setFormData({...formData,[inputName]:e.target.files }) ;
        }
        else{
            setFormData({
               ...formData, [inputName]:e.target.value,
            });
        }
   } 
   


   const handleSubmit = (e)=>{
    e.preventDefault();
    setFormData(...formData)
   }
  return (
    <>
      <Button my={4} onClick={onOpen} data-cy="add-product-button">ADD Productd</Button>
      <Modal isOpen={isOpen}  onClose={onClose} onSubmit={handleSubmit}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" name="dataname" onChange={handleChange} placeholder="Name" />
          <Select data-cy="add-product-category" name="Product" onChange={handleChange}>
            <option data-cy="add-product-category-shirt" value='shirt'>shirt</option>
            <option data-cy="add-product-category-pant" value='pant'>pant</option>
            <option data-cy="add-product-category-jeans" value='jeans'>jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" type="submit">submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
