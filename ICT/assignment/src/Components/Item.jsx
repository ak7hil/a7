import React, { useState } from 'react'

const Item = () => {
    const[productName, setProductName]=useState("");
    const[price, setPrice]=useState("");
    const[category, setCategory]=useState("");
    const[image, setImage]=useState(null);

    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Product Added Succesfully");


        setProductName("");
        setPrice("");
        setCategory("");
        setImage(null);
    };
  return (
    <div style={{maxwidth:"400px",margin:"auto",padding:"20px", textAlign:"center",border:"5px solic #ccc",borderRadius:"8px"}}>
        <h1>ADD PRODUCT</h1>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom:"10px"}}>
                <input
                    type='=text'
                    placeholder='Product Name'
                    value={productName}
                    onChange={(e)=>setProductName(e.target.value)}
                    required
                    style={{width:"100px", padding:"8px",marginBottom:"10px",boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:"10px"}}>
                <input
                    type="number"
                    placeholder="price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    required
                    style={{width:"100%",padding:"8px",marginBottom:"10px", boxSizing:"border-box"}}/>
            </div>
            <div style={{marginBottom:"10px"}}>
                <select
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                    required
                    style={{width:"100%", padding:"8px",marginBottom:"10px", boxSizing:"border-box"}}>
                    <option value=""> Select Category </option>
                    <option value="Electronics">ELECTRONICS</option>
                    <option value="Fasion">FASION</option>
                    <option value="Home">HOME</option>
                    <option value="Books">BOOKS</option>
                </select>
            </div>
            <div style={{marginBottom:"10px"}}>
                <input
                    type="file"
                    accept="image/"
                    onChange={handleImageChange}
                    style={{width:"100%", padding:"8px", boxSizing:"border-box"}}/>
            </div>
            <button type="submit" style={{padding:"10px 20px",backgroundColor:"#007bff", color:"#fff",border:"none",borderRadius:"4px",cursor:'pointer'}}>ADD PRODUCT</button>
        </form>

        

        {image &&(
            <div style={{marginTop:"20px"}}>
                <h3>PRODUCT PREVIEW</h3>
                <p>NAME: </p>
                <p>PRICE: </p>
                <p>CATEGORY: </p>
                <img src={img} alt="Product Preview" style={{maxwidth:"100%", marginTop:"10px"}}/>
            </div>
        )}
      
    </div>
  )
}

export default Item
