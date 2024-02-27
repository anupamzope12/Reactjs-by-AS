export function filterData(searchText,restaurants){
  
    const filterData=restaurants.filter((restaurant)=>
    restaurant.action.text.toLowerCase().includes(searchText.toLowerCase()),
  
    )
    return filterData;
  }
  