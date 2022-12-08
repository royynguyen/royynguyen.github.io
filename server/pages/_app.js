"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
;// CONCATENATED MODULE: ./themes/dark.ts
const darkTheme = {
    palette: {
        mode: "dark"
    }
};

;// CONCATENATED MODULE: ./themes/light.ts
const lightTheme = {
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "sans-serif"
        ].join(",")
    }
};

;// CONCATENATED MODULE: ./contexts/ColorContext.ts

const ColorContext = external_react_default().createContext({});

;// CONCATENATED MODULE: external "@mui/material/Grid"
const Grid_namespaceObject = require("@mui/material/Grid");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_namespaceObject);
;// CONCATENATED MODULE: ./components/header/Header.tsx




const Header = ({})=>{
    const theme = (0,material_namespaceObject.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            justifyContent: "center",
            spacing: 0,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Link, {
                    href: "#",
                    underline: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                        padding: "15px 0px",
                        textAlign: "center",
                        style: {
                            backgroundColor: "black"
                        },
                        component: "h4",
                        variant: "h4",
                        color: "white",
                        fontWeight: "bold",
                        children: "ADIDAS"
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./constants.tsx
const UserList = [
    {
        name: "truong tinh",
        department: "APP",
        roomNumber: "4023",
        luckyNumber: "101"
    },
    {
        name: "nguyen ngoc",
        department: "FW",
        roomNumber: "4023",
        luckyNumber: "102"
    },
    {
        name: "duong chau",
        department: "A&G",
        roomNumber: "4092",
        luckyNumber: "103"
    },
    {
        name: "phung jessica",
        department: "APP",
        roomNumber: "4092",
        luckyNumber: "104"
    },
    {
        name: "tran sarah",
        department: "APP",
        roomNumber: "4093",
        luckyNumber: "105"
    },
    {
        name: "tran huong",
        department: "FW",
        roomNumber: "4093",
        luckyNumber: "106"
    },
    {
        name: "diep nga",
        department: "APP",
        roomNumber: "6222",
        luckyNumber: "107"
    },
    {
        name: "duong thao",
        department: "APP",
        roomNumber: "6222",
        luckyNumber: "108"
    },
    {
        name: "pham hien",
        department: "APP",
        roomNumber: "6221",
        luckyNumber: "109"
    },
    {
        name: "nguyen naomi",
        department: "APP",
        roomNumber: "6221",
        luckyNumber: "110"
    },
    {
        name: "sachdev aruna",
        department: "APP",
        roomNumber: "6223",
        luckyNumber: "111"
    },
    {
        name: "wang sophia",
        department: "APP",
        roomNumber: "6223",
        luckyNumber: "112"
    },
    {
        name: "fomin dmytro",
        department: "APP",
        roomNumber: "6122",
        luckyNumber: "113"
    },
    {
        name: "nguyen jollie",
        department: "APP",
        roomNumber: "6121",
        luckyNumber: "114"
    },
    {
        name: "best jan",
        department: "FW",
        roomNumber: "6121",
        luckyNumber: "115"
    },
    {
        name: "pham jack",
        department: "APP",
        roomNumber: "6123",
        luckyNumber: "116"
    },
    {
        name: "nguyen minhduc",
        department: "APP",
        roomNumber: "6123",
        luckyNumber: "117"
    },
    {
        name: "nguyen mylinh",
        department: "APP",
        roomNumber: "7021",
        luckyNumber: "118"
    },
    {
        name: "pham hang",
        department: "APP",
        roomNumber: "7021",
        luckyNumber: "119"
    },
    {
        name: "vo nguyet",
        department: "APP",
        roomNumber: "7022",
        luckyNumber: "120"
    },
    {
        name: "hua huyen",
        department: "APP",
        roomNumber: "7022",
        luckyNumber: "121"
    },
    {
        name: "nguyen nhut",
        department: "APP",
        roomNumber: "7023",
        luckyNumber: "122"
    },
    {
        name: "truong bao",
        department: "APP",
        roomNumber: "7023",
        luckyNumber: "123"
    },
    {
        name: "tran bo",
        department: "APP",
        roomNumber: "7031",
        luckyNumber: "124"
    },
    {
        name: "phan chris",
        department: "APP",
        roomNumber: "7031",
        luckyNumber: "125"
    },
    {
        name: "huynh tri",
        department: "APP",
        roomNumber: "7033",
        luckyNumber: "126"
    },
    {
        name: "phan huu",
        department: "APP",
        roomNumber: "7033",
        luckyNumber: "127"
    },
    {
        name: "le yen",
        department: "APP",
        roomNumber: "7032",
        luckyNumber: "128"
    },
    {
        name: "bui anh",
        department: "HR",
        roomNumber: "7032",
        luckyNumber: "129"
    },
    {
        name: "nguyen winnie",
        department: "A&G",
        roomNumber: "4152",
        luckyNumber: "130"
    },
    {
        name: "serrano maria",
        department: "A&G",
        roomNumber: "4152",
        luckyNumber: "131"
    },
    {
        name: "le tuananh",
        department: "APP",
        roomNumber: "5181",
        luckyNumber: "132"
    },
    {
        name: "tran hieu",
        department: "APP",
        roomNumber: "5181",
        luckyNumber: "133"
    },
    {
        name: "nguyen yuunadung",
        department: "APP",
        roomNumber: "5183",
        luckyNumber: "134"
    },
    {
        name: "tran thoa",
        department: "APP",
        roomNumber: "5183",
        luckyNumber: "135"
    },
    {
        name: "do tran",
        department: "Admin",
        roomNumber: "6162",
        luckyNumber: "136"
    },
    {
        name: "ngo trang",
        department: "Admin",
        roomNumber: "6162",
        luckyNumber: "137"
    },
    {
        name: "luu nhi",
        department: "Admin",
        roomNumber: "6163",
        luckyNumber: "138"
    },
    {
        name: "nguyen kimem",
        department: "Admin",
        roomNumber: "6163",
        luckyNumber: "139"
    },
    {
        name: "nguyen tuongvy",
        department: "Admin",
        roomNumber: "5161",
        luckyNumber: "140"
    },
    {
        name: "phan ngan",
        department: "Admin",
        roomNumber: "5161",
        luckyNumber: "141"
    },
    {
        name: "nguyen khanh",
        department: "Admin",
        roomNumber: "5162",
        luckyNumber: "142"
    },
    {
        name: "pham phuong",
        department: "FW",
        roomNumber: "5162",
        luckyNumber: "143"
    },
    {
        name: "nguyen tam",
        department: "APP",
        roomNumber: "6272",
        luckyNumber: "144"
    },
    {
        name: "pham thuy",
        department: "APP",
        roomNumber: "6272",
        luckyNumber: "145"
    },
    {
        name: "tran anna",
        department: "APP",
        roomNumber: "6273",
        luckyNumber: "146"
    },
    {
        name: "tran hongngoc",
        department: "APP",
        roomNumber: "6273",
        luckyNumber: "147"
    },
    {
        name: "nguyen quehuong",
        department: "FW",
        roomNumber: "7071",
        luckyNumber: "148"
    },
    {
        name: "nguyen nguyen",
        department: "FW",
        roomNumber: "7071",
        luckyNumber: "149"
    },
    {
        name: "vu alice",
        department: "FW",
        roomNumber: "7072",
        luckyNumber: "150"
    },
    {
        name: "hoang phoebe",
        department: "FW",
        roomNumber: "7072",
        luckyNumber: "151"
    },
    {
        name: "nguyen tung",
        department: "FW",
        roomNumber: "7073",
        luckyNumber: "152"
    },
    {
        name: "nguyen minhtrung",
        department: "A&G",
        roomNumber: "7073",
        luckyNumber: "153"
    },
    {
        name: "nguyen phamnga",
        department: "Admin",
        roomNumber: "7112",
        luckyNumber: "154"
    },
    {
        name: "doan linh",
        department: "APP",
        roomNumber: "7112",
        luckyNumber: "155"
    },
    {
        name: "duong tuyet",
        department: "APP",
        roomNumber: "7111",
        luckyNumber: "156"
    },
    {
        name: "ho van",
        department: "HR",
        roomNumber: "7111",
        luckyNumber: "157"
    },
    {
        name: "bui mee",
        department: "HR",
        roomNumber: "7113",
        luckyNumber: "158"
    },
    {
        name: "hoang thu",
        department: "SEA",
        roomNumber: "7113",
        luckyNumber: "159"
    },
    {
        name: "phan truc",
        department: "FW",
        roomNumber: "7122",
        luckyNumber: "160"
    },
    {
        name: "nguyen caroline",
        department: "FW",
        roomNumber: "7122",
        luckyNumber: "161"
    },
    {
        name: "van phat",
        department: "FW",
        roomNumber: "7123",
        luckyNumber: "162"
    },
    {
        name: "tran bob",
        department: "FW",
        roomNumber: "7123",
        luckyNumber: "163"
    },
    {
        name: "nguyen trungapp",
        department: "APP",
        roomNumber: "7121",
        luckyNumber: "164"
    },
    {
        name: "nguyen phung",
        department: "FW",
        roomNumber: "7121",
        luckyNumber: "165"
    },
    {
        name: "nguyen thihuyen",
        department: "FW",
        roomNumber: "7152",
        luckyNumber: "166"
    },
    {
        name: "nguyen casey",
        department: "FW",
        roomNumber: "7152",
        luckyNumber: "167"
    },
    {
        name: "nguyen thuhien",
        department: "FW",
        roomNumber: "7151",
        luckyNumber: "168"
    },
    {
        name: "nguyen tien",
        department: "FW",
        roomNumber: "7151",
        luckyNumber: "169"
    },
    {
        name: "vo trongnhan",
        department: "FW",
        roomNumber: "7153",
        luckyNumber: "170"
    },
    {
        name: "dinh an",
        department: "FW",
        roomNumber: "7153",
        luckyNumber: "171"
    },
    {
        name: "nguyen ngoctam",
        department: "FW",
        roomNumber: "7131",
        luckyNumber: "172"
    },
    {
        name: "nguyen hai",
        department: "FW",
        roomNumber: "7131",
        luckyNumber: "173"
    },
    {
        name: "tran thanhtung",
        department: "FW",
        roomNumber: "7132",
        luckyNumber: "174"
    },
    {
        name: "vo thu",
        department: "FW",
        roomNumber: "7132",
        luckyNumber: "175"
    },
    {
        name: "nguyen canh",
        department: "FW",
        roomNumber: "7133",
        luckyNumber: "176"
    },
    {
        name: "dinh luan",
        department: "FW",
        roomNumber: "7133",
        luckyNumber: "177"
    },
    {
        name: "nguyen ngoctuan",
        department: "FW",
        roomNumber: "8021",
        luckyNumber: "178"
    },
    {
        name: "kieu hoa",
        department: "FW",
        roomNumber: "8021",
        luckyNumber: "179"
    },
    {
        name: "bui son",
        department: "Reebok",
        roomNumber: "8022",
        luckyNumber: "180"
    },
    {
        name: "vu victor",
        department: "FW",
        roomNumber: "8022",
        luckyNumber: "181"
    },
    {
        name: "nguyen duc",
        department: "FW",
        roomNumber: "8023",
        luckyNumber: "182"
    },
    {
        name: "nguyen trung",
        department: "FW",
        roomNumber: "8023",
        luckyNumber: "183"
    },
    {
        name: "do nu",
        department: "FW",
        roomNumber: "8031",
        luckyNumber: "184"
    },
    {
        name: "phan ly",
        department: "FW",
        roomNumber: "8031",
        luckyNumber: "185"
    },
    {
        name: "pham nathan",
        department: "FW",
        roomNumber: "8032",
        luckyNumber: "186"
    },
    {
        name: "do thuan",
        department: "Reebok",
        roomNumber: "8032",
        luckyNumber: "187"
    },
    {
        name: "nguyen son",
        department: "FW",
        roomNumber: "8033",
        luckyNumber: "188"
    },
    {
        name: "tran kevin",
        department: "FW",
        roomNumber: "8033",
        luckyNumber: "189"
    },
    {
        name: "le tran",
        department: "FW",
        roomNumber: "8051",
        luckyNumber: "190"
    },
    {
        name: "huynh thao",
        department: "FW",
        roomNumber: "8051",
        luckyNumber: "191"
    },
    {
        name: "le trang",
        department: "FW",
        roomNumber: "8052",
        luckyNumber: "192"
    },
    {
        name: "phung my",
        department: "FW",
        roomNumber: "8052",
        luckyNumber: "193"
    },
    {
        name: "tran ly",
        department: "FW",
        roomNumber: "8053",
        luckyNumber: "194"
    },
    {
        name: "nguyen hanh",
        department: "FW",
        roomNumber: "8053",
        luckyNumber: "195"
    },
    {
        name: "nguyen bella",
        department: "Reebok",
        roomNumber: "8102",
        luckyNumber: "196"
    },
    {
        name: "tran oanh",
        department: "Reebok",
        roomNumber: "8102",
        luckyNumber: "197"
    },
    {
        name: "feirer janine",
        department: "FW",
        roomNumber: "8101",
        luckyNumber: "198"
    },
    {
        name: "morlier claire",
        department: "FW",
        roomNumber: "8101",
        luckyNumber: "199"
    },
    {
        name: "hage luisa",
        department: "FW",
        roomNumber: "8103",
        luckyNumber: "200"
    },
    {
        name: "tietz lisa-maria",
        department: "FW",
        roomNumber: "8103",
        luckyNumber: "201"
    },
    {
        name: "nguyen luonghanh",
        department: "FW",
        roomNumber: "8111",
        luckyNumber: "202"
    },
    {
        name: "lu mai",
        department: "FW",
        roomNumber: "8111",
        luckyNumber: "203"
    },
    {
        name: "nguyen ninh",
        department: "FW",
        roomNumber: "8112",
        luckyNumber: "204"
    },
    {
        name: "dang dan",
        department: "FW",
        roomNumber: "8112",
        luckyNumber: "205"
    },
    {
        name: "tran thai",
        department: "FW",
        roomNumber: "8113",
        luckyNumber: "206"
    },
    {
        name: "tran linh",
        department: "FW",
        roomNumber: "8113",
        luckyNumber: "207"
    },
    {
        name: "tu trung",
        department: "FW",
        roomNumber: "8132",
        luckyNumber: "208"
    },
    {
        name: "nguyen jimmy",
        department: "FW",
        roomNumber: "8131",
        luckyNumber: "209"
    },
    {
        name: "tran lam",
        department: "FW",
        roomNumber: "8131",
        luckyNumber: "210"
    },
    {
        name: "nguyen nghe",
        department: "FW",
        roomNumber: "8133",
        luckyNumber: "211"
    },
    {
        name: "nguyen thang",
        department: "FW",
        roomNumber: "8133",
        luckyNumber: "212"
    },
    {
        name: "fathi amir",
        department: "FW",
        roomNumber: "8182",
        luckyNumber: "213"
    },
    {
        name: "yeung michael",
        department: "APP",
        roomNumber: "5192",
        luckyNumber: "214"
    },
    {
        name: "jobst martin",
        department: "FW",
        roomNumber: "8181",
        luckyNumber: "215"
    },
    {
        name: "erkenbrecher frederic",
        department: "FW",
        roomNumber: "8253",
        luckyNumber: "216"
    },
    {
        name: "prince tyler",
        department: "FW",
        roomNumber: "8183",
        luckyNumber: "217"
    },
    {
        name: "nguyen hien2",
        department: "FW",
        roomNumber: "8251",
        luckyNumber: "218"
    },
    {
        name: "nguyen rick",
        department: "FW",
        roomNumber: "8251",
        luckyNumber: "219"
    },
    {
        name: "vo triet",
        department: "FW",
        roomNumber: "8252",
        luckyNumber: "220"
    },
    {
        name: "tran khoa",
        department: "FW",
        roomNumber: "8252",
        luckyNumber: "221"
    },
    {
        name: "duong toan",
        department: "FW",
        roomNumber: "8253",
        luckyNumber: "222"
    },
    {
        name: "nguyen duytu",
        department: "FW",
        roomNumber: "8183",
        luckyNumber: "223"
    },
    {
        name: "tran thao",
        department: "Reebok",
        roomNumber: "8292",
        luckyNumber: "224"
    },
    {
        name: "le tam",
        department: "FW",
        roomNumber: "8292",
        luckyNumber: "225"
    },
    {
        name: "le ngan",
        department: "Reebok",
        roomNumber: "8291",
        luckyNumber: "226"
    },
    {
        name: "trinh haithanh",
        department: "FW",
        roomNumber: "8291",
        luckyNumber: "227"
    },
    {
        name: "nguyen thiphuongthao",
        department: "FW",
        roomNumber: "8293",
        luckyNumber: "228"
    },
    {
        name: "giang ngocanh",
        department: "Reebok",
        roomNumber: "8293",
        luckyNumber: "229"
    },
    {
        name: "truong thanh",
        department: "FW",
        roomNumber: "9021",
        luckyNumber: "230"
    },
    {
        name: "huynh an",
        department: "FW",
        roomNumber: "9021",
        luckyNumber: "231"
    },
    {
        name: "vu thai",
        department: "FW",
        roomNumber: "9022",
        luckyNumber: "232"
    },
    {
        name: "nguyen duyen",
        department: "FW",
        roomNumber: "9022",
        luckyNumber: "233"
    },
    {
        name: "duong minh",
        department: "FW",
        roomNumber: "9023",
        luckyNumber: "234"
    },
    {
        name: "doan binh",
        department: "FW",
        roomNumber: "9023",
        luckyNumber: "235"
    },
    {
        name: "du tuan",
        department: "FW",
        roomNumber: "9031",
        luckyNumber: "236"
    },
    {
        name: "nguyen minhtien",
        department: "FW",
        roomNumber: "9031",
        luckyNumber: "237"
    },
    {
        name: "nguyen thaihien",
        department: "FW",
        roomNumber: "9032",
        luckyNumber: "238"
    },
    {
        name: "dang my",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "239"
    },
    {
        name: "nguyen trong",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "240"
    },
    {
        name: "phan chau",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "241"
    },
    {
        name: "nguyen vanhung",
        department: "FW",
        roomNumber: "9051",
        luckyNumber: "242"
    },
    {
        name: "nguyen tri",
        department: "FW",
        roomNumber: "9051",
        luckyNumber: "243"
    },
    {
        name: "pham thuan",
        department: "FW",
        roomNumber: "9052",
        luckyNumber: "244"
    },
    {
        name: "khau thien",
        department: "FW",
        roomNumber: "9052",
        luckyNumber: "245"
    },
    {
        name: "nguyen thuan",
        department: "FW",
        roomNumber: "9053",
        luckyNumber: "246"
    },
    {
        name: "stegmueller simon",
        department: "FW",
        roomNumber: "9053",
        luckyNumber: "247"
    },
    {
        name: "mai grace",
        department: "FW",
        roomNumber: "9072",
        luckyNumber: "248"
    },
    {
        name: "tran cindy",
        department: "FW",
        roomNumber: "9072",
        luckyNumber: "249"
    },
    {
        name: "nguyen kelly",
        department: "FW",
        roomNumber: "9071",
        luckyNumber: "250"
    },
    {
        name: "than anh",
        department: "FW",
        roomNumber: "9071",
        luckyNumber: "251"
    },
    {
        name: "dinh thao",
        department: "FW",
        roomNumber: "9073",
        luckyNumber: "252"
    },
    {
        name: "nguyen emma",
        department: "FW",
        roomNumber: "9073",
        luckyNumber: "253"
    },
    {
        name: "do phuong",
        department: "FW",
        roomNumber: "9131",
        luckyNumber: "254"
    },
    {
        name: "huynh tram",
        department: "FW",
        roomNumber: "9131",
        luckyNumber: "255"
    },
    {
        name: "duong hoa",
        department: "FW",
        roomNumber: "9132",
        luckyNumber: "256"
    },
    {
        name: "tran thuminh",
        department: "FW",
        roomNumber: "9132",
        luckyNumber: "257"
    },
    {
        name: "le duyen",
        department: "FW",
        roomNumber: "9133",
        luckyNumber: "258"
    },
    {
        name: "pham anh",
        department: "FW",
        roomNumber: "9133",
        luckyNumber: "259"
    },
    {
        name: "nguyen garry",
        department: "FW",
        roomNumber: "9201",
        luckyNumber: "260"
    },
    {
        name: "tran duy",
        department: "FW",
        roomNumber: "9201",
        luckyNumber: "261"
    },
    {
        name: "phan phong",
        department: "FW",
        roomNumber: "9202",
        luckyNumber: "262"
    },
    {
        name: "nguyen tuongduy",
        department: "HR",
        roomNumber: "9202",
        luckyNumber: "263"
    },
    {
        name: "benito borja",
        department: "FW",
        roomNumber: "9203",
        luckyNumber: "264"
    },
    {
        name: "tran tri",
        department: "FW",
        roomNumber: "9203",
        luckyNumber: "265"
    },
    {
        name: "nguyen dong",
        department: "FW",
        roomNumber: "9211",
        luckyNumber: "266"
    },
    {
        name: "nguyen anh",
        department: "FW",
        roomNumber: "9211",
        luckyNumber: "267"
    },
    {
        name: "nguyen thuy",
        department: "FW",
        roomNumber: "9212",
        luckyNumber: "268"
    },
    {
        name: "phan hieu",
        department: "FW",
        roomNumber: "9212",
        luckyNumber: "269"
    },
    {
        name: "holland benjamin",
        department: "FW",
        roomNumber: "9213",
        luckyNumber: "270"
    },
    {
        name: "dodson tim",
        department: "FW",
        roomNumber: "9213",
        luckyNumber: "271"
    },
    {
        name: "nguyen quynh",
        department: "FW",
        roomNumber: "9231",
        luckyNumber: "272"
    },
    {
        name: "phan trunghieu",
        department: "FW",
        roomNumber: "9231",
        luckyNumber: "273"
    },
    {
        name: "tran phong",
        department: "FW",
        roomNumber: "9232",
        luckyNumber: "274"
    },
    {
        name: "vo quangthuy",
        department: "FW",
        roomNumber: "9232",
        luckyNumber: "275"
    },
    {
        name: "nguyen ngocvan",
        department: "FW",
        roomNumber: "9233",
        luckyNumber: "276"
    },
    {
        name: "tran nguyen",
        department: "FW",
        roomNumber: "9233",
        luckyNumber: "277"
    },
    {
        name: "hoang sinh",
        department: "FW",
        roomNumber: "9262",
        luckyNumber: "278"
    },
    {
        name: "tran giahy",
        department: "FW",
        roomNumber: "9262",
        luckyNumber: "279"
    },
    {
        name: "nguyen maianh",
        department: "FW",
        roomNumber: "9261",
        luckyNumber: "280"
    },
    {
        name: "chu tran",
        department: "FW",
        roomNumber: "9261",
        luckyNumber: "281"
    },
    {
        name: "nguyen vuvan",
        department: "FW",
        roomNumber: "9263",
        luckyNumber: "282"
    },
    {
        name: "nguyen kimdung",
        department: "FW",
        roomNumber: "9263",
        luckyNumber: "283"
    },
    {
        name: "tu vinh",
        department: "FW",
        roomNumber: "5163",
        luckyNumber: "284"
    },
    {
        name: "bo thang",
        department: "IT",
        roomNumber: "5163",
        luckyNumber: "285"
    },
    {
        name: "pham tam",
        department: "FW",
        roomNumber: "5211",
        luckyNumber: "286"
    },
    {
        name: "nguyen tu",
        department: "FW",
        roomNumber: "5211",
        luckyNumber: "287"
    },
    {
        name: "le thuc",
        department: "FW",
        roomNumber: "5212",
        luckyNumber: "288"
    },
    {
        name: "bui phat",
        department: "FW",
        roomNumber: "5212",
        luckyNumber: "289"
    },
    {
        name: "nguyen dao",
        department: "FW",
        roomNumber: "9291",
        luckyNumber: "290"
    },
    {
        name: "vo nhatphuong",
        department: "FW",
        roomNumber: "9291",
        luckyNumber: "291"
    },
    {
        name: "nguyen bao",
        department: "IT",
        roomNumber: "9292",
        luckyNumber: "292"
    },
    {
        name: "nguyen hien",
        department: "IT",
        roomNumber: "9292",
        luckyNumber: "293"
    },
    {
        name: "nguyen thanhtam",
        department: "FW",
        roomNumber: "9293",
        luckyNumber: "294"
    },
    {
        name: "srivastava deleep",
        department: "FW",
        roomNumber: "9293",
        luckyNumber: "295"
    },
    {
        name: "tu vu",
        department: "SEA",
        roomNumber: "5052",
        luckyNumber: "296"
    },
    {
        name: "nguyen trongthanh",
        department: "Logistics",
        roomNumber: "5051",
        luckyNumber: "297"
    },
    {
        name: "tran nung",
        department: "Logistics",
        roomNumber: "5051",
        luckyNumber: "298"
    },
    {
        name: "dang vinh",
        department: "SEA",
        roomNumber: "5053",
        luckyNumber: "299"
    },
    {
        name: "le khoa",
        department: "SEA",
        roomNumber: "5053",
        luckyNumber: "300"
    },
    {
        name: "nguyen lindy",
        department: "SEA",
        roomNumber: "5082",
        luckyNumber: "301"
    },
    {
        name: "nguyen doan",
        department: "SEA",
        roomNumber: "5082",
        luckyNumber: "302"
    },
    {
        name: "ho anna",
        department: "SEA",
        roomNumber: "5081",
        luckyNumber: "303"
    },
    {
        name: "vu my",
        department: "SEA",
        roomNumber: "5081",
        luckyNumber: "304"
    },
    {
        name: "ngo dieuthanh",
        department: "HR",
        roomNumber: "5083",
        luckyNumber: "305"
    },
    {
        name: "herradura roannerose",
        department: "HR",
        roomNumber: "5083",
        luckyNumber: "306"
    },
    {
        name: "urlych amandin ingabire",
        department: "Creation Center",
        roomNumber: "6141",
        luckyNumber: "307"
    },
    {
        name: "ferry steinhoefel",
        department: "Creation Center",
        roomNumber: "6142",
        luckyNumber: "308"
    },
    {
        name: "kate hunt",
        department: "Creation Center",
        roomNumber: "6131",
        luckyNumber: "309"
    },
    {
        name: "johannes hemingway",
        department: "Creation Center",
        roomNumber: "6132",
        luckyNumber: "310"
    },
    {
        name: "taylor kneuven",
        department: "Creation Center",
        roomNumber: "6133",
        luckyNumber: "311"
    },
    {
        name: "fischer kai",
        department: "FW",
        roomNumber: "4151",
        luckyNumber: "312"
    },
    {
        name: "flower lee",
        department: "FW",
        roomNumber: "5061",
        luckyNumber: "313"
    },
    {
        name: "merceus sartre",
        department: "FW",
        roomNumber: "5191",
        luckyNumber: "314"
    },
    {
        name: "nguyen haithanh",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "315"
    },
    {
        name: "nguyen quan",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "316"
    },
    {
        name: "nguyen vinh",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "317"
    },
    {
        name: "tran ngoc",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "318"
    },
    {
        name: "tran van",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "319"
    },
    {
        name: "vu phuong",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "320"
    },
    {
        name: "nguyen ha",
        department: "APP",
        roomNumber: "",
        luckyNumber: "321"
    },
    {
        name: "le dang",
        department: "APP",
        roomNumber: "",
        luckyNumber: "322"
    },
    {
        name: "kwok judy",
        department: "APP",
        roomNumber: "",
        luckyNumber: "323"
    },
    {
        name: "bui thy",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "324"
    },
    {
        name: "duong chuong",
        department: "APP",
        roomNumber: "",
        luckyNumber: "325"
    },
    {
        name: "le vananh",
        department: "APP",
        roomNumber: "",
        luckyNumber: "326"
    },
    {
        name: "nguyen amy",
        department: "APP",
        roomNumber: "",
        luckyNumber: "327"
    },
    {
        name: "pham dung",
        department: "APP",
        roomNumber: "",
        luckyNumber: "328"
    },
    {
        name: "jones gail",
        department: "APP",
        roomNumber: "",
        luckyNumber: "329"
    },
    {
        name: "thai phuoc",
        department: "FW",
        roomNumber: "",
        luckyNumber: "330"
    },
    {
        name: "nguyen quynhnga",
        department: "FW",
        roomNumber: "",
        luckyNumber: "331"
    },
    {
        name: "nguyen nhung",
        department: "FW",
        roomNumber: "",
        luckyNumber: "332"
    },
    {
        name: "tran long",
        department: "FW",
        roomNumber: "",
        luckyNumber: "333"
    },
    {
        name: "mignano kevin",
        department: "FW",
        roomNumber: "",
        luckyNumber: "334"
    },
    {
        name: "nguyen trieu",
        department: "FW",
        roomNumber: "",
        luckyNumber: "335"
    },
    {
        name: "vo loc",
        department: "FW",
        roomNumber: "",
        luckyNumber: "336"
    },
    {
        name: "doan tien",
        department: "FW",
        roomNumber: "",
        luckyNumber: "337"
    },
    {
        name: "do hoang",
        department: "FW",
        roomNumber: "",
        luckyNumber: "338"
    },
    {
        name: "nguyen huuthuan",
        department: "FW",
        roomNumber: "",
        luckyNumber: "339"
    },
    {
        name: "nguyen huyen",
        department: "FW",
        roomNumber: "",
        luckyNumber: "340"
    },
    {
        name: "nguyen xuandan",
        department: "FW",
        roomNumber: "",
        luckyNumber: "341"
    },
    {
        name: "vu trang",
        department: "FW",
        roomNumber: "",
        luckyNumber: "342"
    },
    {
        name: "pitcher ethan",
        department: "HR",
        roomNumber: "",
        luckyNumber: "343"
    },
    {
        name: "tran duongthoa",
        department: "HR",
        roomNumber: "",
        luckyNumber: "344"
    },
    {
        name: "nguyen dung",
        department: "SEA",
        roomNumber: "",
        luckyNumber: "345"
    },
    {
        name: "john norkeliunas",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "346"
    },
    {
        name: "kevin collins",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "347"
    },
    {
        name: "mark godfrey",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "348"
    },
    {
        name: "sven tulowitzki",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "349"
    },
    {
        name: "david nguyen",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "350"
    },
    {
        name: "alexander dowson",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "351"
    },
    {
        name: "patrick park",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "352"
    },
    {
        name: "yujung son",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "353"
    },
    {
        name: "harry luong",
        department: "Creation Center",
        roomNumber: "",
        luckyNumber: "354"
    }
];

// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(1943);
;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps  }) {
    const [mode, setMode] = external_react_default().useState("light");
    const [user, setUser] = external_react_default().useState();
    const [inputValue, setInputValue] = external_react_default().useState("");
    const [userDetail, setUserDetail] = external_react_default().useState();
    const theme = external_react_default().useMemo(()=>(0,material_namespaceObject.createTheme)(mode === "light" ? lightTheme : darkTheme), [
        mode
    ]);
    const colorMode = external_react_default().useMemo(()=>({
            toggleColorMode: ()=>{
                setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
            }
        }), []);
    return /*#__PURE__*/ jsx_runtime_.jsx(ColorContext.Provider, {
        value: colorMode,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CssBaseline, {
                    enableColorScheme: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                    title: "Adidas Checkin",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                        container: true,
                        justifyContent: "flex-start",
                        height: "100vh",
                        style: {
                            background: `transparent url(/images/bg.jpg) center / cover no-repeat`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                padding: "20px",
                                height: "100px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Autocomplete, {
                                    style: {
                                        width: "100%",
                                        backgroundColor: "white"
                                    },
                                    value: user,
                                    disablePortal: true,
                                    id: "combo-box-demo",
                                    options: UserList,
                                    onChange: (event, newValue)=>{
                                        setUser(newValue);
                                    },
                                    inputValue: inputValue,
                                    onInputChange: (event, newInputValue)=>{
                                        setInputValue(newInputValue);
                                    },
                                    getOptionLabel: (option)=>{
                                        var ref;
                                        return `${(option === null || option === void 0 ? void 0 : (ref = option.name) === null || ref === void 0 ? void 0 : ref.trim().toUpperCase()) ?? ""}`;
                                    },
                                    renderOption: (props, option)=>/*#__PURE__*/ (0,external_react_.createElement)("li", {
                                            ...props,
                                            key: option.luckyNumber
                                        }, option.name.toUpperCase()),
                                    sx: {
                                        width: 300
                                    },
                                    renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.TextField, {
                                            style: {
                                                textTransform: "uppercase"
                                            },
                                            ...params,
                                            label: "Input your name"
                                        })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                padding: "20px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Button, {
                                    type: "button",
                                    fullWidth: true,
                                    sx: {
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        ":hover": {
                                            color: "#000",
                                            backgroundColor: "#fff"
                                        }
                                    },
                                    onClick: ()=>setUserDetail(user),
                                    children: "Check In"
                                })
                            }),
                            userDetail && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                container: true,
                                spacing: 1,
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                        item: true,
                                        xs: 12,
                                        textAlign: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                fontSize: "20px",
                                                pt: "10px",
                                                bgcolor: "rgba(255, 0, 0, 0.2)",
                                                fontWeight: "bold",
                                                color: "white",
                                                children: "WELCOME TO TOWNHALL 2022"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                fontSize: "20px",
                                                pb: "10px",
                                                bgcolor: "rgba(255, 0, 0, 0.2)",
                                                fontWeight: "bold",
                                                color: "white",
                                                children: "THANKS FOR YOUR ATTENDANCE"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                        item: true,
                                        container: true,
                                        xs: 12,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                                item: true,
                                                xs: 4,
                                                textAlign: "left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        pl: "10px",
                                                        fontWeight: "bold",
                                                        children: "Name: "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        pl: "10px",
                                                        fontWeight: "bold",
                                                        children: "Department: "
                                                    }),
                                                    userDetail.roomNumber.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        pl: "10px",
                                                        fontWeight: "bold",
                                                        children: "Room Number: "
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        pl: "10px",
                                                        fontWeight: "bold",
                                                        children: "Lucky Number: "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                                                item: true,
                                                xs: 8,
                                                textAlign: "left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        children: userDetail.name.toUpperCase()
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        children: userDetail.department
                                                    }),
                                                    userDetail.roomNumber.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        children: userDetail.roomNumber
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
                                                        fontSize: "12px",
                                                        bgcolor: "rgba(255, 0, 0, 0.2)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        children: userDetail.luckyNumber
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943], () => (__webpack_exec__(4252)));
module.exports = __webpack_exports__;

})();