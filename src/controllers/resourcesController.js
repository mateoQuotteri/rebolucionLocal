module.exports = {
  showResources: (req, res) => {
    const resources = [
      {
        name: "Bitcoin",
        url: "http://localhost:3000/resources/bitcoin",
        ready: true,
        icon: "fa-brands fa-bitcoin",
      },
      {
        name: "Ethereum",
        url: "",
        ready: false,
        icon: "fa-brands fa-ethereum",
      },
      {
        name: "AI",
        url: "",
        ready: false,
        icon: "fa-solid fa-brain",
      },
      {
        name: "Edicion de Video",
        url: "",
        ready: false,
        icon: "fa-solid fa-video",
      },
      {
        name: "DeFi",
        url: "",
        ready: false,
        icon: "fa-solid fa-square-poll-vertical",
      },
    ];
    res.render("resources", { resources: resources });
  },
  resourcesBitcoin: (req, res) => {
    res.render("resources/bitcoin")
  },
};
