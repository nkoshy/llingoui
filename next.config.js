/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
  webpack: (config) => {
    // Use the ignore-loader for .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "ignore-loader",
    });

    return config;
  },

  env: {
    themeColors: {


      darkPinkBg: '#950E4D', // i didnot use this color to any element
      mediumPinkBg: '#BF286F',
      lightPinkBg: "#D73C84",
      extraPink: "#B01B61",

      darkBlackText: "#151515",
      mediumBlackText: "#232036",



      primaryBackgroundColor: "#FFF",
      footerBg: "#950E4D",
      animationBg: "#F8F7F7",
      textColor: "#D73C84",
      whiteText: "#fff",


      // Add more theme colors as needed
    },
    logoUrl: "/2tadawi.uae-png.svg", 
    logoUrl1: "/athenia.svg", 
    bgUrl: "/BackgorundPink.png",
  },

 output: 'export',


};



