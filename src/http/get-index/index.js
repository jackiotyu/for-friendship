const Main = require("@architect/views/main.js");
const staticAssetsHelper = require("./static-assets-helper");

// Customize your site by changing the data below
exports.handler = async function Index() {
  let body = Main({
    /**
     * Basic bio
     */
    // location: 'West Glacier, MT',
    fullname: "荣耀战魂小站", // ←  Start by adding your name!
    title: "荣耀战魂小站",
    occupation: "Artist & Photographer",
    bio: "敬请期待",

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: "2504448153@email.com",

    /**
     * Layout
     */
    photographer: "育碧成都",
    service: "Ubisoft",
    credit: "https://bird-fnd-staging.begin.app/",
    //image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    image:
      "https://cdn.jsdelivr.net/gh/jackiotyu/ImgCloud/blob/master/wulin/Zhanhu/armor/common%20s12/Xiaowei.jpg"
  });

  return {
    headers: {
      "content-type": "text/html; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
    },
    body
  };
};
