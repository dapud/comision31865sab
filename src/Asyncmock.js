const products = [
    { id: '1', name: 'Driver Ping', price: 95000 , category: 'Driver' , img: '/images/driverPing.webp' , stock: 20, description: 'Driver ping 2022 ultra ligth' },

    { id: '2', name: 'Guante Srixon', price: 3000 , category: 'Accesorios' , img: '/images/guantesrixon.webp' , stock: 40, description: 'Guante Cuero Srixon' },

    { id: '3', name: 'Set Hierros Calaway', price: 130000 , category: 'Hierros' , img: '/images/hierroCallaway.webp' , stock: 10, description: 'Set Hierros Callaway 2022 flex' },

    { id: '4', name: 'Set Hierros Callaway Max', price: 135000 , category: 'Hierros' , img: '/images/hierroCallawayMax.webp' , stock: 10, description: 'Set Hierros Callaway Max 2022 flex' },

    { id: '5', name: 'Set Callaway Apex', price: 150000 , category: 'Hierros' , img: '/images/hierrosCallawayApex.jpg' , stock: 20, description: 'Set Hierros Callaway Apex 2022 ultra ligth' },

    { id: '6', name: 'Set Hierros Ping', price: 120000 , category: 'Hierros' , img: '/images/hierrosping.jpeg' , stock: 20, description: 'Set Hierros Ping 2022' },

    { id: '7', name: 'Pelotas Titleist', price: 5500 , category: 'Pelotas' , img: '/images/pelotasTitleist.jpeg' , stock: 400, description: ' Set de 3 Pelotas Titleist' },

    { id: '8', name: 'Driver Taylormade', price: 105000 , category: 'Driver' , img: '/images/taylormade.webp' , stock: 20, description: 'Driver Taylormade 2022 Graphite' },

    { id: '9', name: 'Set Wedge', price: 95000 , category: 'Wedges' , img: '/images/wedgeset.webp' , stock: 20, description: 'Set de wedge Cleveland zipcore CBX-2022 ultra' },

   
]

export const  getproducts = () => {

    return new Promise ((resolve, reject) => {
        setTimeout (() => {  
            resolve(products)
        }, 3000 )
    }
    
    )
}