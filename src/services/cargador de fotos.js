export const cargador=(req)=>{
   
    const fotos=[];
 const  importAll=(r) =>{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(req); 
   console.log(images)
   for (const prop in images) {
    console.log(`obj.${prop} = ${images[prop].default}`);
    fotos.push(images[prop].default)
  }
  return fotos
}