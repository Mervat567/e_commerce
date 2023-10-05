const Product=require("./product.model")

exports.existingProduct=async(filter)=>{
  try{
   let product=await Product.findOne(filter)
   if(product&&statusCode==200){
    return{
    record:product,
    }
   }
   else{
    return{
    code:404,
    error:"product is not found"
    } 
   }
  }catch(error){
   console.log("error"+error.message)
   return{
    success:false,
    code:500,
    error:"unexpected error"
   }
  }
}

exports.list=async(filter)=>{
   try{
   let records=await Product.find(filter)
   if(records.length>0){
    if(statusCode==200){
    return{
    records,
    }
   }
  }
   else{
    return{
    code:404,
    error:"products are not found"
    }
   }
   } catch(error){
    console.log("error"+error.message)
    return{
     code:500,
     success:false,
     error:"unexpected error"
    }
   }
}

exports.create=async(form)=>{
  try{
   let product=await this.existingProduct({name:form.name})
   if(!product.success){
    const newProduct=new Product(form)
    await newProduct.save()
    if(statusCode==201){
    return{
     record:newProduct
    }
   }
  }
   else{
    return{
    code:400,
    error:"Product already exists"    
   }
   }
  }catch(error){
    console.log("error"+error.message)
    return{
    code:500,
    success:false,
    error:"unexpected error"
    }
  }
}

exports.update=async(form,id)=>{
  try{
  let product=await this.existingProduct({_id:id})
  if(product.success){
    await Product.findByIdAndUpdate(id,form)
    if(statusCode==200){
    return {
    record:product.record
    }
  }
  }
  else{
    return{
        code:404,
        error:"Product doesn't exist"
      }
  }
  }catch(error){
    console.log("error"+error.message)
    return{
     code:500,
     success:false,
     error:"unexpected error"
    } 
  }
}

exports.remove=async(id)=>{
 try{
  let product=await this.existingProduct({_id:id})
  if(id&&product.success){
     await Product.findByIdAndDelete(id)
     if(statusCode==200){
     return{
     success:true
     }
  }
}
  else{
    return{
    code:404,
    error:"Product doesn't exist"
    }
  }
 }catch(error){
 console.log("error"+error.message)
 return{
 code:500,
 success:false,
 error:"unexpected error"
 }
 }
}

