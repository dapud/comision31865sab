
const ItemDetail = ({ description, img, })  =>{
    return( 
        <div style={{width: '50%', height: "auto", display: "flex ", alignItems: 'center', backgroundColor: 'rgb(129 182 210)', justifyContent: 'flex-end', fontsize: '20px', fontstyle: 'italic'}}>
       

            {description }  
            <img  src={img} alt={ img } style={{ align:'center',  width:'40%', height:'40%', margin: '15px', borderColor:' black'}} />
                   
           
            
         </div>
     
)
    
    

}



export default ItemDetail
