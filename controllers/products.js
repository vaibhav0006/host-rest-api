const Products = require('../models/products')

const getAllProducts = async (req,res) =>{

  const {company, name, sort, select} = req.query;
  const queryObject = { };

  if(company){
    queryObject.company = company;
    //console.log(queryObject);
  }

  //i means - Case Insensitive
  if(name){
    queryObject.name = { $regex : name, $options : "i"}; 
  }

  let apiData = Products.find(queryObject)

  if(sort){  
    let sortFix = sort.replace(",", " ")
    apiData = apiData.sort(sortFix)  
  }
  
  if(select){ 
    //let selectFix = select.replace(",", " ")
    let selectFix = select.split(",").join(" ") 
    apiData = apiData.select(selectFix)  
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);
  
  //  .sort("-company") 
  // .select("name company")
  const myData = await apiData                           
  res.status(200).json({myData})
}

const getAllProductsTesting = async (req,res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = {getAllProducts,getAllProductsTesting}