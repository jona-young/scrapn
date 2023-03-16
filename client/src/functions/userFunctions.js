//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
    const name = e.target.getAttribute('data-key');
    const value = e.target.value;
       
    updateItem({...currentItem, [name]: value});
  };