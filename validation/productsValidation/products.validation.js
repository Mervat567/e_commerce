const joi=require("joi")

module.exports={
 addProductValidation:{
    body:joi.object().required().keys({
    name:joi.string().empty().required().pattern(new RegExp(/^[a-z,.'-]+$/i)).messages({
      "string.base" :"please enter a name",
      "string.empty":"name cannot be empty",
      "any.required":"name must be entered",
      "string.pattern.base":"please enter a valid name"
    }),
    price:joi.number.empty().required().messages({
        "number.base" :"please enter a price",
        "number.empty":"price cannot be empty",
        "any.required":"price must be entered",
        "number.alphanum":"please enter a valid price",
    }),
    description:joi.string().min(10).max(120).empty().required().messages({
        "string.base" :"please enter a description",
        "string.min" :"minimum description length must be 10",
        "string.max" :"description must be between 10 and 120",
        "string.empty":"description cannot be empty",
        "any.required":"price must be entered",
    }),
    image:joi.object().required().messages({
        "object.base":"please enter a valid image ",
        "any.required":"image must be entered",  
    })
 })
 },
 
 updateProductValidation:{
    body:joi.object().required().keys({
    name:joi.string().empty().required().pattern(new RegExp(/^[a-z,.'-]+$/i)).messages({
      "string.base" :"please enter a name",
      "string.empty":"name cannot be empty",
      "any.required":"name must be entered",
      "string.pattern.base":"please enter a valid name"
    }),
    price:joi.number.empty().required().messages({
        "number.base" :"please enter a price",
        "number.empty":"price cannot be empty",
        "any.required":"price must be entered",
        "number.alphanum":"please enter a valid price",
    }),
    description:joi.string().min(10).max(120).empty().required().messages({
        "string.base" :"please enter a description",
        "string.min" :"minimum description length must be 10",
        "string.max" :"description must be between 10 and 120",
        "string.empty":"description cannot be empty",
        "any.required":"price must be entered",
    }),
    image:joi.object().required().messages({
        "object.base":"please enter a valid image ",
        "any.required":"image must be entered",  
    })
 })
 }
}