export const getTech = (technologies) => {
  if(technologies.length > 3){
    return technologies.slice(0, 3)
  }
  return false
};
