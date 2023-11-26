const { validationResult } = require("express-validator")

module.exports = {
    index : (req,res)=>{

        const thingsToLearn= [{
            name: "Herramientas",
            image: "web3Card.png",
            icon : "fa-solid fa-gear"
           },
           {
            name: "Blockchain",
            image: "blockchainCard.png",
            icon : "fa-solid fa-cubes",
           },
           {
            name: "Habilidades digitales",
            image: "contratoCard.png",
            icon :"fa-solid fa-user-tie"
           },
           {
            name: "DeFi",
            image: "defiCard.png",
            icon : "fa-solid fa-chart-column",
           },
           {
            name: "Bitcoin",
            image: "bitcoinCard.png",
            icon : "fa-brands fa-bitcoin",
           },
           {
            name: "Ethereum",
            image: "ethereumCard.png",
            icon : "fa-brands fa-ethereum",
           },
        ]
        res.render("home", { thingsToLearn})
    },
    contact : (req,res)=>{
        res.render("contact")
},
aviso : (req,res)=>{
    res.render("aviso")
},
showAdminPanel : (req,res)=>{
    res.render("adminPanel")
},
errorGoogleAuth : (req,res)=>{
    res.render("errorAuth")
},
showResources :  (req,res)=>{
        const resources= [{
            name: "Bitcoin",
            url: "http://localhost:3000/resources/bitcoin",
            ready : true,
            icon : "fa-brands fa-bitcoin"
           },
           {
            name: "Ethereum",
            url: "",
            ready : false,
            icon: "fa-brands fa-ethereum"
           }
        ]
        res.render("resources", { resources: resources})
},
}