const products = [
    { id: '1', name: 'Driver Ping', price: 95000 , category: 'Driver' , img: '/images/driverPing.jpg' , stock: 20, description: 'Driver ping g425 max, 10.5 de loft, vara alta regular de 55 gramos.' },

    { id: '2', name: 'Guante Srixon', price: 3000 , category: 'Accesorios' , img: '/images/guantesrixon.jpg' , stock: 40, description: 'El guante de cuero Srixon Cabretta es un guante de cuero de primera calidad que ofrece el mejor ajuste y rendimiento.' },

    { id: '3', name: 'Set Hierros Calaway', price: 130000 , category: 'Hierros' , img: '/images/hierroCallaway.jpg' , stock: 10, description: ' Callaway Golf STEELHEAD XR 8 hierro, eje de acero, flexión tiesa, derecho.' },

    { id: '4', name: 'Set Hierros Callaway Max', price: 135000 , category: 'Hierros' , img: '/images/hierroCallawayMax.jpg' , stock: 10, description: 'Set Hierros Callaway Max 2022 flex, eje de acero, flexión tiesa' },

    { id: '5', name: 'Set Callaway Apex', price: 150000 , category: 'Hierros' , img: '/images/hierrosCallawayApex.jpg' , stock: 20, description: 'Set Hierros Callaway Apex 2022 ultra ligth' },

    { id: '6', name: 'Set Hierros Ping', price: 120000 , category: 'Hierros' , img: '/images/hierrosping.jpg' , stock: 20, description: 'Set Hierros Ping 2022' },

    { id: '7', name: 'Pelotas Titleist', price: 5500 , category: 'Pelotas' , img: '/images/pelotasTitleist.jpg' , stock: 400, description: ' Set de 3 Pelotas Titleist' },

    { id: '8', name: 'Driver Taylormade', price: 105000 , category: 'Driver' , img: '/images/Driver Golf Taylormade M4.jpg' , stock: 20, description: 'Driver Taylormade 2022 Graphite' },

    { id: '9', name: 'Set Wedge', price: 95000 , category: 'Wedges' , img: '/images/wedgeset.jpg' , stock: 20, description: 'Set de wedge Cleveland zipcore CBX-2022 ultra' },

    { id: '10', name: 'Pelotas Bridgestone', price: 12500 , category: 'Pelotas' , img: '/images/Pelotas_Bridgestone.jpg' , stock: 20, description: '12 Pelotas Bridgestone Tour Bxs Tw Edition' },
    
    { id: '11', name: 'Carro Manual Golf Powakaddy', price: 95000 , category: 'Accesorios' , img: '/images/Carro Manual Golf Powakaddy.jpg' , stock: 20, description: 'Carro Manual Golf Powakaddy' },
   
    { id: '12', name: 'Carro de Golf Caddytek', price: 105000 , category: 'Accesorios' , img: '/images/Carro Manual Golf Caddytek Ez V8 3 Ruedas.jpg' , stock: 20, description: 'Carro Manual Golf Caddytek Ez V8 3 Ruedas' },
   
    { id: '13', name: 'Pelotas Golf Srixon', price: 19000 , category: 'Pelotas' , img: '/images/Pelotas Golf Srixon Softfeel.jpg' , stock: 20, description: 'Pelotas Golf Taylormade Noodle Caja X24 ' },
    
    { id: '14', name: 'Pelotas Golf Taylormade ', price: 28000 , category: 'Pelotas' , img: '/images/Pelotas Golf Taylormade Noodle Caja X24 .jpg' , stock: 20, description: 'Pelotas Golf Taylormade Noodle Caja X24 ' },
    
    { id: '15', name: 'Portaparaguas Golf ', price: 9000 , category: 'Accesorios' , img: '/images/Portaparaguas Golf.jpg' , stock: 20, description: 'Portaparaguas Golf  ' },
    
    { id: '16', name: 'Driver Srixon Zx5  ', price: 130000 , category: 'Driver' , img: '/images/Driver Srixon Zx5 .jpg' , stock: 20, description: 'Driver Srixon Zx5 flex' },
    
    { id: '17', name: 'Driver Callaway Rogue St Max', price: 140000 , category: 'Driver' , img: '/images/Driver Callaway Rogue St Max D.jpg' , stock: 20, description: 'Portaparaguas Golf  ' },
    
    { id: '18', name: 'Wedge Callaway Jaws Md5 Tour', price: 55000 , category: 'Wedges' , img: '/images/Wedge Callaway Jaws Md5 Tour Grey.jpg' , stock: 20, description: 'Wedge Callaway Jaws Md5 Tour Grey' },

    { id: '19', name: 'Set Wedge', price: 45000 , category: 'Wedges' , img: '/images/Wedge Cleveland Rtx Zipcore Black.jpg' , stock: 20, description: 'Wedge Cleveland Rtx Zipcore Black' },

    { id: '20', name: 'Set Wedge', price: 65000 , category: 'Wedges' , img: '/images/Wedge Taylormade Mg3 Milled Grind 3 Black.jpg' , stock: 20, description: 'Wedge Taylormade Mg3 Milled Grind 3 Black' },

    { id: '21', name: 'Set Wedge', price: 45000 , category: 'Wedges' , img: '/images/Wedge Cleveland Rtx Zipcore Black.jpg' , stock: 20, description: 'Wedge Cleveland Rtx Zipcore Black' },

    { id: '22', name: 'Set Wedge', price: 65000 , category: 'Wedges' , img: '/images/Wedge Taylormade Mg3 Milled Grind 3 Black.jpg' , stock: 20, description: 'Wedge Taylormade Mg3 Milled Grind 3 Black' },





]

export const  getProducts = () => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {  
            resolve(products)
        }, 500 )
    }
    
    )
}

export const  getProductsByCategory = (categoryId) => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {  
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500 )
    }
    
    )
}


export const  getProductById = (id) => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {  
            resolve(products.find(prod =>  prod.id === id))
        }, 500 )
    }
    
    )
}

                                    