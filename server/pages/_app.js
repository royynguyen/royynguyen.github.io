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
        name: "truong thi thuy tinh",
        department: "APP",
        roomNumber: "4023",
        luckyNumber: "101"
    },
    {
        name: "nguyen thanh minh ngoc",
        department: "FW",
        roomNumber: "4023",
        luckyNumber: "102"
    },
    {
        name: "duong thi pho chau",
        department: "A&G",
        roomNumber: "4092",
        luckyNumber: "103"
    },
    {
        name: "phung thi thanh huong",
        department: "APP",
        roomNumber: "4092",
        luckyNumber: "104"
    },
    {
        name: "tran thi nuong",
        department: "APP",
        roomNumber: "4093",
        luckyNumber: "105"
    },
    {
        name: "tran thi thu huong",
        department: "FW",
        roomNumber: "4093",
        luckyNumber: "106"
    },
    {
        name: "diep thi tuong nga",
        department: "APP",
        roomNumber: "6222",
        luckyNumber: "107"
    },
    {
        name: "duong ngoc mai thao",
        department: "APP",
        roomNumber: "6222",
        luckyNumber: "108"
    },
    {
        name: "pham thi minh hien",
        department: "APP",
        roomNumber: "6221",
        luckyNumber: "109"
    },
    {
        name: "nguyen thi thanh nga",
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
        name: "wang ya-huei",
        department: "APP",
        roomNumber: "6223",
        luckyNumber: "112"
    },
    {
        name: "fomin dmytro",
        department: "APP",
        roomNumber: "6232",
        luckyNumber: "113"
    },
    {
        name: "nguyen thi pho",
        department: "APP",
        roomNumber: "6231",
        luckyNumber: "114"
    },
    {
        name: "jan moritz fiete best",
        department: "FW",
        roomNumber: "6231",
        luckyNumber: "115"
    },
    {
        name: "pham phu loc",
        department: "APP",
        roomNumber: "6233",
        luckyNumber: "116"
    },
    {
        name: "nguyen minh duc",
        department: "APP",
        roomNumber: "6233",
        luckyNumber: "117"
    },
    {
        name: "nguyen thi my linh",
        department: "APP",
        roomNumber: "7021",
        luckyNumber: "118"
    },
    {
        name: "pham thi thu hang",
        department: "APP",
        roomNumber: "7021",
        luckyNumber: "119"
    },
    {
        name: "vo phan minh nguyet",
        department: "APP",
        roomNumber: "7022",
        luckyNumber: "120"
    },
    {
        name: "hua thi huyen",
        department: "APP",
        roomNumber: "7022",
        luckyNumber: "121"
    },
    {
        name: "nguyen tran nhut",
        department: "APP",
        roomNumber: "7023",
        luckyNumber: "122"
    },
    {
        name: "truong thanh gia bao",
        department: "APP",
        roomNumber: "7023",
        luckyNumber: "123"
    },
    {
        name: "tran vu minh",
        department: "APP",
        roomNumber: "7031",
        luckyNumber: "124"
    },
    {
        name: "phan thanh tam",
        department: "APP",
        roomNumber: "7031",
        luckyNumber: "125"
    },
    {
        name: "huynh minh tri",
        department: "APP",
        roomNumber: "7033",
        luckyNumber: "126"
    },
    {
        name: "phan han huu",
        department: "APP",
        roomNumber: "7033",
        luckyNumber: "127"
    },
    {
        name: "le thi my yen",
        department: "APP",
        roomNumber: "7032",
        luckyNumber: "128"
    },
    {
        name: "bui phuc tram anh",
        department: "HR",
        roomNumber: "7032",
        luckyNumber: "129"
    },
    {
        name: "nguyen phung ngoc quynh",
        department: "A&G",
        roomNumber: "4152",
        luckyNumber: "130"
    },
    {
        name: "serrano maria agnes noleal",
        department: "A&G",
        roomNumber: "4152",
        luckyNumber: "131"
    },
    {
        name: "le vu tuan anh",
        department: "APP",
        roomNumber: "5181",
        luckyNumber: "132"
    },
    {
        name: "tran trung hieu",
        department: "APP",
        roomNumber: "5181",
        luckyNumber: "133"
    },
    {
        name: "nguyen vu ngoc dung",
        department: "APP",
        roomNumber: "5183",
        luckyNumber: "134"
    },
    {
        name: "tran thi kim thoa",
        department: "APP",
        roomNumber: "5183",
        luckyNumber: "135"
    },
    {
        name: "do nam tran",
        department: "Admin",
        roomNumber: "6162",
        luckyNumber: "136"
    },
    {
        name: "ngo thi tuyet trang",
        department: "Admin",
        roomNumber: "6162",
        luckyNumber: "137"
    },
    {
        name: "luu thuy nhi",
        department: "Admin",
        roomNumber: "6163",
        luckyNumber: "138"
    },
    {
        name: "nguyen thi kim em",
        department: "Admin",
        roomNumber: "6163",
        luckyNumber: "139"
    },
    {
        name: "nguyen tuong vy",
        department: "Admin",
        roomNumber: "5161",
        luckyNumber: "140"
    },
    {
        name: "phan thi tuyet ngan",
        department: "Admin",
        roomNumber: "5161",
        luckyNumber: "141"
    },
    {
        name: "nguyen ngoc minh khanh",
        department: "Admin",
        roomNumber: "5162",
        luckyNumber: "142"
    },
    {
        name: "pham nha phuong",
        department: "FW",
        roomNumber: "5162",
        luckyNumber: "143"
    },
    {
        name: "nguyen thi thu tam",
        department: "APP",
        roomNumber: "6272",
        luckyNumber: "144"
    },
    {
        name: "pham tran thanh thuy",
        department: "APP",
        roomNumber: "6272",
        luckyNumber: "145"
    },
    {
        name: "tran thi nhu hoa",
        department: "APP",
        roomNumber: "6273",
        luckyNumber: "146"
    },
    {
        name: "tràn doan hòng ngọc",
        department: "APP",
        roomNumber: "6273",
        luckyNumber: "147"
    },
    {
        name: "nguyen thi que huong",
        department: "FW",
        roomNumber: "7071",
        luckyNumber: "148"
    },
    {
        name: "nguyen hong nguyen",
        department: "FW",
        roomNumber: "7071",
        luckyNumber: "149"
    },
    {
        name: "vu thi thom",
        department: "FW",
        roomNumber: "7072",
        luckyNumber: "150"
    },
    {
        name: "hoang thi nhu phuong",
        department: "FW",
        roomNumber: "7072",
        luckyNumber: "151"
    },
    {
        name: "nguyen thanh tung",
        department: "FW",
        roomNumber: "7073",
        luckyNumber: "152"
    },
    {
        name: "nguyen minh trung",
        department: "A&G",
        roomNumber: "7073",
        luckyNumber: "153"
    },
    {
        name: "nguyen pham quynh nga",
        department: "Admin",
        roomNumber: "7112",
        luckyNumber: "154"
    },
    {
        name: "doan thi thuy linh",
        department: "APP",
        roomNumber: "7112",
        luckyNumber: "155"
    },
    {
        name: "duong thi kim tuyet",
        department: "APP",
        roomNumber: "7111",
        luckyNumber: "156"
    },
    {
        name: "ho thanh van",
        department: "HR",
        roomNumber: "7111",
        luckyNumber: "157"
    },
    {
        name: "bui huong cam my",
        department: "HR",
        roomNumber: "7113",
        luckyNumber: "158"
    },
    {
        name: "hoang ngoc thu",
        department: "SEA",
        roomNumber: "7113",
        luckyNumber: "159"
    },
    {
        name: "phan thi thanh truc",
        department: "FW",
        roomNumber: "7122",
        luckyNumber: "160"
    },
    {
        name: "nguyen chau bao nguyen",
        department: "FW",
        roomNumber: "7122",
        luckyNumber: "161"
    },
    {
        name: "van cap phat",
        department: "FW",
        roomNumber: "7123",
        luckyNumber: "162"
    },
    {
        name: "tran hoang phuong",
        department: "FW",
        roomNumber: "7123",
        luckyNumber: "163"
    },
    {
        name: "nguyen trung phuong",
        department: "APP",
        roomNumber: "7121",
        luckyNumber: "164"
    },
    {
        name: "nguyen hoang phung",
        department: "FW",
        roomNumber: "7121",
        luckyNumber: "165"
    },
    {
        name: "nguyen thi huyen",
        department: "FW",
        roomNumber: "7152",
        luckyNumber: "166"
    },
    {
        name: "nguyen khong thanh thuong",
        department: "FW",
        roomNumber: "7152",
        luckyNumber: "167"
    },
    {
        name: "nguyen thi thu hien",
        department: "FW",
        roomNumber: "7151",
        luckyNumber: "168"
    },
    {
        name: "nguyen thi my tien",
        department: "FW",
        roomNumber: "7151",
        luckyNumber: "169"
    },
    {
        name: "vo trong nhan",
        department: "FW",
        roomNumber: "7153",
        luckyNumber: "170"
    },
    {
        name: "dinh le viet an",
        department: "FW",
        roomNumber: "7153",
        luckyNumber: "171"
    },
    {
        name: "nguyen thi ngoc tam",
        department: "FW",
        roomNumber: "7131",
        luckyNumber: "172"
    },
    {
        name: "nguyen thi duyen hai",
        department: "FW",
        roomNumber: "7131",
        luckyNumber: "173"
    },
    {
        name: "tran thanh tung",
        department: "FW",
        roomNumber: "7132",
        luckyNumber: "174"
    },
    {
        name: "vo thanh thu",
        department: "FW",
        roomNumber: "7132",
        luckyNumber: "175"
    },
    {
        name: "nguyen thanh canh",
        department: "FW",
        roomNumber: "7133",
        luckyNumber: "176"
    },
    {
        name: "dinh cong luan",
        department: "FW",
        roomNumber: "7133",
        luckyNumber: "177"
    },
    {
        name: "nguyen ngoc tuan",
        department: "FW",
        roomNumber: "8021",
        luckyNumber: "178"
    },
    {
        name: "kieu xuan hoa",
        department: "FW",
        roomNumber: "8021",
        luckyNumber: "179"
    },
    {
        name: "bui xuan son",
        department: "Reebok",
        roomNumber: "8022",
        luckyNumber: "180"
    },
    {
        name: "vu toan thang",
        department: "FW",
        roomNumber: "8022",
        luckyNumber: "181"
    },
    {
        name: "nguyen dong duc",
        department: "FW",
        roomNumber: "8023",
        luckyNumber: "182"
    },
    {
        name: "nguyen tien trung",
        department: "FW",
        roomNumber: "8023",
        luckyNumber: "183"
    },
    {
        name: "do thi minh nu",
        department: "FW",
        roomNumber: "8031",
        luckyNumber: "184"
    },
    {
        name: "phan thi thao ly",
        department: "FW",
        roomNumber: "8031",
        luckyNumber: "185"
    },
    {
        name: "pham thanh nhat",
        department: "FW",
        roomNumber: "8032",
        luckyNumber: "186"
    },
    {
        name: "do dinh thuan",
        department: "Reebok",
        roomNumber: "8032",
        luckyNumber: "187"
    },
    {
        name: "nguyen cong ky son",
        department: "FW",
        roomNumber: "8033",
        luckyNumber: "188"
    },
    {
        name: "tran dinh thao",
        department: "FW",
        roomNumber: "8033",
        luckyNumber: "189"
    },
    {
        name: "le thi dien tran",
        department: "FW",
        roomNumber: "8051",
        luckyNumber: "190"
    },
    {
        name: "huynh thi thanh thao",
        department: "FW",
        roomNumber: "8051",
        luckyNumber: "191"
    },
    {
        name: "le thi thu trang",
        department: "FW",
        roomNumber: "8052",
        luckyNumber: "192"
    },
    {
        name: "phung ngoc my",
        department: "FW",
        roomNumber: "8052",
        luckyNumber: "193"
    },
    {
        name: "tran thi hong ly",
        department: "FW",
        roomNumber: "8053",
        luckyNumber: "194"
    },
    {
        name: "nguyen thi kim hanh",
        department: "FW",
        roomNumber: "8053",
        luckyNumber: "195"
    },
    {
        name: "nguyen thi kim chi",
        department: "Reebok",
        roomNumber: "8102",
        luckyNumber: "196"
    },
    {
        name: "tran tieu oanh",
        department: "Reebok",
        roomNumber: "8102",
        luckyNumber: "197"
    },
    {
        name: "janine evelyn feirer",
        department: "FW",
        roomNumber: "8101",
        luckyNumber: "198"
    },
    {
        name: "morlier claire marie",
        department: "FW",
        roomNumber: "8101",
        luckyNumber: "199"
    },
    {
        name: "luisa hage",
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
        name: "nguyen thi luong hanh",
        department: "FW",
        roomNumber: "8111",
        luckyNumber: "202"
    },
    {
        name: "lu thi thanh mai",
        department: "FW",
        roomNumber: "8111",
        luckyNumber: "203"
    },
    {
        name: "nguyen an ninh",
        department: "FW",
        roomNumber: "8112",
        luckyNumber: "204"
    },
    {
        name: "dang quoc dan",
        department: "FW",
        roomNumber: "8112",
        luckyNumber: "205"
    },
    {
        name: "tran van thai",
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
        name: "tu minh trung",
        department: "FW",
        roomNumber: "8132",
        luckyNumber: "208"
    },
    {
        name: "nguyen trong huu",
        department: "FW",
        roomNumber: "8131",
        luckyNumber: "209"
    },
    {
        name: "tran van lam",
        department: "FW",
        roomNumber: "8131",
        luckyNumber: "210"
    },
    {
        name: "nguyen an nghe",
        department: "FW",
        roomNumber: "8133",
        luckyNumber: "211"
    },
    {
        name: "nguyen quyet thang",
        department: "FW",
        roomNumber: "8133",
        luckyNumber: "212"
    },
    {
        name: "fathi seyed amir",
        department: "FW",
        roomNumber: "8182",
        luckyNumber: "213"
    },
    {
        name: "yeung man kwong",
        department: "APP",
        roomNumber: "5192",
        luckyNumber: "214"
    },
    {
        name: "martin jobst",
        department: "FW",
        roomNumber: "8181",
        luckyNumber: "215"
    },
    {
        name: "frederic erkenbrecher",
        department: "FW",
        roomNumber: "8253",
        luckyNumber: "216"
    },
    {
        name: "prince tyler james",
        department: "FW",
        roomNumber: "8183",
        luckyNumber: "217"
    },
    {
        name: "nguyen thuong hien",
        department: "FW",
        roomNumber: "8251",
        luckyNumber: "218"
    },
    {
        name: "nguyen don manh",
        department: "FW",
        roomNumber: "8251",
        luckyNumber: "219"
    },
    {
        name: "vo minh triet",
        department: "FW",
        roomNumber: "8252",
        luckyNumber: "220"
    },
    {
        name: "tran dang khoa",
        department: "FW",
        roomNumber: "8252",
        luckyNumber: "221"
    },
    {
        name: "duong trong toan",
        department: "FW",
        roomNumber: "8253",
        luckyNumber: "222"
    },
    {
        name: "nguyen duy tu",
        department: "FW",
        roomNumber: "8183",
        luckyNumber: "223"
    },
    {
        name: "tran ngoc phuong thao",
        department: "Reebok",
        roomNumber: "8292",
        luckyNumber: "224"
    },
    {
        name: "le huynh thanh tam",
        department: "FW",
        roomNumber: "8292",
        luckyNumber: "225"
    },
    {
        name: "le vu thuy ngan",
        department: "Reebok",
        roomNumber: "8291",
        luckyNumber: "226"
    },
    {
        name: "trinh thi hai thanh",
        department: "FW",
        roomNumber: "8291",
        luckyNumber: "227"
    },
    {
        name: "nguyen thi phuong thao",
        department: "FW",
        roomNumber: "8293",
        luckyNumber: "228"
    },
    {
        name: "giang ngoc anh",
        department: "Reebok",
        roomNumber: "8293",
        luckyNumber: "229"
    },
    {
        name: "truong chi thanh",
        department: "FW",
        roomNumber: "9021",
        luckyNumber: "230"
    },
    {
        name: "huynh ngoc an",
        department: "FW",
        roomNumber: "9021",
        luckyNumber: "231"
    },
    {
        name: "vu duy thai",
        department: "FW",
        roomNumber: "9022",
        luckyNumber: "232"
    },
    {
        name: "nguyen phuong duyen",
        department: "FW",
        roomNumber: "9022",
        luckyNumber: "233"
    },
    {
        name: "duong van minh",
        department: "FW",
        roomNumber: "9023",
        luckyNumber: "234"
    },
    {
        name: "doan thanh binh",
        department: "FW",
        roomNumber: "9023",
        luckyNumber: "235"
    },
    {
        name: "du nha tuan",
        department: "FW",
        roomNumber: "9031",
        luckyNumber: "236"
    },
    {
        name: "nguyen minh tien",
        department: "FW",
        roomNumber: "9031",
        luckyNumber: "237"
    },
    {
        name: "nguyen thai hien",
        department: "FW",
        roomNumber: "9032",
        luckyNumber: "238"
    },
    {
        name: "dang tieu my",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "239"
    },
    {
        name: "nguyen duc trong",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "240"
    },
    {
        name: "phan duong ngoc chau",
        department: "FW",
        roomNumber: "9033",
        luckyNumber: "241"
    },
    {
        name: "nguyen van hung",
        department: "FW",
        roomNumber: "9051",
        luckyNumber: "242"
    },
    {
        name: "nguyen dinh tri",
        department: "FW",
        roomNumber: "9051",
        luckyNumber: "243"
    },
    {
        name: "pham minh thuan",
        department: "FW",
        roomNumber: "9052",
        luckyNumber: "244"
    },
    {
        name: "khau tri vinh thien",
        department: "FW",
        roomNumber: "9052",
        luckyNumber: "245"
    },
    {
        name: "nguyen viet thuan",
        department: "FW",
        roomNumber: "9053",
        luckyNumber: "246"
    },
    {
        name: "simon stegmueller",
        department: "FW",
        roomNumber: "9053",
        luckyNumber: "247"
    },
    {
        name: "mai thi ngoc bich",
        department: "FW",
        roomNumber: "9072",
        luckyNumber: "248"
    },
    {
        name: "tran thi tuyet",
        department: "FW",
        roomNumber: "9072",
        luckyNumber: "249"
    },
    {
        name: "nguyen thu huong",
        department: "FW",
        roomNumber: "9071",
        luckyNumber: "250"
    },
    {
        name: "than thi kieu anh",
        department: "FW",
        roomNumber: "9071",
        luckyNumber: "251"
    },
    {
        name: "dinh nguyen phuong thao",
        department: "FW",
        roomNumber: "9073",
        luckyNumber: "252"
    },
    {
        name: "nguyen thi bich ngoc",
        department: "FW",
        roomNumber: "9073",
        luckyNumber: "253"
    },
    {
        name: "do thi ngoc phuong",
        department: "FW",
        roomNumber: "9131",
        luckyNumber: "254"
    },
    {
        name: "huynh dao diem tram",
        department: "FW",
        roomNumber: "9131",
        luckyNumber: "255"
    },
    {
        name: "duong thi mai hoa",
        department: "FW",
        roomNumber: "9132",
        luckyNumber: "256"
    },
    {
        name: "tran thu minh",
        department: "FW",
        roomNumber: "9132",
        luckyNumber: "257"
    },
    {
        name: "le my duyen",
        department: "FW",
        roomNumber: "9133",
        luckyNumber: "258"
    },
    {
        name: "pham tam anh",
        department: "FW",
        roomNumber: "9133",
        luckyNumber: "259"
    },
    {
        name: "nguyen binh nguyen",
        department: "FW",
        roomNumber: "9201",
        luckyNumber: "260"
    },
    {
        name: "tran ngoc duy",
        department: "FW",
        roomNumber: "9201",
        luckyNumber: "261"
    },
    {
        name: "phan xuan phong",
        department: "FW",
        roomNumber: "9202",
        luckyNumber: "262"
    },
    {
        name: "nguyen tuong duy",
        department: "HR",
        roomNumber: "9202",
        luckyNumber: "263"
    },
    {
        name: "borja benito fernandez",
        department: "FW",
        roomNumber: "9203",
        luckyNumber: "264"
    },
    {
        name: "tran dung tri",
        department: "FW",
        roomNumber: "9203",
        luckyNumber: "265"
    },
    {
        name: "nguyen quang dong",
        department: "FW",
        roomNumber: "9211",
        luckyNumber: "266"
    },
    {
        name: "nguyen quang anh",
        department: "FW",
        roomNumber: "9211",
        luckyNumber: "267"
    },
    {
        name: "nguyen thi thanh thuy",
        department: "FW",
        roomNumber: "9212",
        luckyNumber: "268"
    },
    {
        name: "phan thi ngoc hieu",
        department: "FW",
        roomNumber: "9212",
        luckyNumber: "269"
    },
    {
        name: "benjamin christoph holland",
        department: "FW",
        roomNumber: "9213",
        luckyNumber: "270"
    },
    {
        name: "tim franklin dodson",
        department: "FW",
        roomNumber: "9213",
        luckyNumber: "271"
    },
    {
        name: "nguyen tran quynh",
        department: "FW",
        roomNumber: "9231",
        luckyNumber: "272"
    },
    {
        name: "phan trung hieu",
        department: "FW",
        roomNumber: "9231",
        luckyNumber: "273"
    },
    {
        name: "tran thanh phong",
        department: "FW",
        roomNumber: "9232",
        luckyNumber: "274"
    },
    {
        name: "vo quang thuy",
        department: "FW",
        roomNumber: "9232",
        luckyNumber: "275"
    },
    {
        name: "nguyen thi ngoc van",
        department: "FW",
        roomNumber: "9233",
        luckyNumber: "276"
    },
    {
        name: "tran thi ngoc nguyen",
        department: "FW",
        roomNumber: "9233",
        luckyNumber: "277"
    },
    {
        name: "hoang ngoc giang sinh",
        department: "FW",
        roomNumber: "9262",
        luckyNumber: "278"
    },
    {
        name: "tran hoang gia hy",
        department: "FW",
        roomNumber: "9262",
        luckyNumber: "279"
    },
    {
        name: "nguyen mai anh",
        department: "FW",
        roomNumber: "9261",
        luckyNumber: "280"
    },
    {
        name: "chu vu bao tran",
        department: "FW",
        roomNumber: "9261",
        luckyNumber: "281"
    },
    {
        name: "nguyen pham vu van",
        department: "FW",
        roomNumber: "9263",
        luckyNumber: "282"
    },
    {
        name: "nguyen thi kim dung",
        department: "FW",
        roomNumber: "9263",
        luckyNumber: "283"
    },
    {
        name: "tu khanh vinh",
        department: "FW",
        roomNumber: "5163",
        luckyNumber: "284"
    },
    {
        name: "bo quoc thang",
        department: "IT",
        roomNumber: "5163",
        luckyNumber: "285"
    },
    {
        name: "pham minh tam",
        department: "FW",
        roomNumber: "5211",
        luckyNumber: "286"
    },
    {
        name: "nguyen thanh tu",
        department: "FW",
        roomNumber: "5211",
        luckyNumber: "287"
    },
    {
        name: "le trong thuc",
        department: "FW",
        roomNumber: "5212",
        luckyNumber: "288"
    },
    {
        name: "bui tien phat",
        department: "FW",
        roomNumber: "5212",
        luckyNumber: "289"
    },
    {
        name: "nguyen mai dao",
        department: "FW",
        roomNumber: "9291",
        luckyNumber: "290"
    },
    {
        name: "vo nhat phuong",
        department: "FW",
        roomNumber: "9291",
        luckyNumber: "291"
    },
    {
        name: "nguyen van bao",
        department: "IT",
        roomNumber: "9292",
        luckyNumber: "292"
    },
    {
        name: "nguyen thuong hien",
        department: "IT",
        roomNumber: "9292",
        luckyNumber: "293"
    },
    {
        name: "nguyen thanh tam",
        department: "FW",
        roomNumber: "9293",
        luckyNumber: "294"
    },
    {
        name: "deleep srivastava",
        department: "FW",
        roomNumber: "9293",
        luckyNumber: "295"
    },
    {
        name: "tu khac huy vu",
        department: "SEA",
        roomNumber: "5052",
        luckyNumber: "296"
    },
    {
        name: "nguyen trong thanh",
        department: "Logistics",
        roomNumber: "5051",
        luckyNumber: "297"
    },
    {
        name: "tran van nung",
        department: "Logistics",
        roomNumber: "5051",
        luckyNumber: "298"
    },
    {
        name: "dang quang vinh",
        department: "SEA",
        roomNumber: "5053",
        luckyNumber: "299"
    },
    {
        name: "le thanh van khoa",
        department: "SEA",
        roomNumber: "5053",
        luckyNumber: "300"
    },
    {
        name: "nguyen vu khanh linh",
        department: "SEA",
        roomNumber: "5082",
        luckyNumber: "301"
    },
    {
        name: "nguyen thuy khanh doan",
        department: "SEA",
        roomNumber: "5082",
        luckyNumber: "302"
    },
    {
        name: "ho thi kim xuan",
        department: "SEA",
        roomNumber: "5081",
        luckyNumber: "303"
    },
    {
        name: "vu thi my",
        department: "SEA",
        roomNumber: "5081",
        luckyNumber: "304"
    },
    {
        name: "ngo hoang dieu thanh",
        department: "HR",
        roomNumber: "5083",
        luckyNumber: "305"
    },
    {
        name: "herradura pavino roanne rose",
        department: "HR",
        roomNumber: "5083",
        luckyNumber: "306"
    },
    {
        name: "urlych amandin ingabire",
        department: "Creation Center",
        roomNumber: "6121",
        luckyNumber: "307"
    },
    {
        name: "ferry steinhoefel",
        department: "Creation Center",
        roomNumber: "6122",
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
        name: "fischer kai torsten",
        department: "FW",
        roomNumber: "4151",
        luckyNumber: "312"
    },
    {
        name: "flower lee marlon",
        department: "FW",
        roomNumber: "5061",
        luckyNumber: "313"
    },
    {
        name: "sartre merceus",
        department: "FW",
        roomNumber: "5191",
        luckyNumber: "314"
    },
    {
        name: "nguyen hai thanh",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "315"
    },
    {
        name: "nguyen hong van quan",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "316"
    },
    {
        name: "nguyen xuan vinh",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "317"
    },
    {
        name: "tran thi bao ngoc",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "318"
    },
    {
        name: "tran chau hoang van",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "319"
    },
    {
        name: "vu thi cuc phuong",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "320"
    },
    {
        name: "nguyen thi thu ha",
        department: "APP",
        roomNumber: "",
        luckyNumber: "321"
    },
    {
        name: "le hai dang",
        department: "APP",
        roomNumber: "",
        luckyNumber: "322"
    },
    {
        name: "kwok chu wun",
        department: "APP",
        roomNumber: "",
        luckyNumber: "323"
    },
    {
        name: "bui trang thy",
        department: "A&G",
        roomNumber: "",
        luckyNumber: "324"
    },
    {
        name: "duong thi my chuong",
        department: "APP",
        roomNumber: "",
        luckyNumber: "325"
    },
    {
        name: "le thi van anh",
        department: "APP",
        roomNumber: "",
        luckyNumber: "326"
    },
    {
        name: "nguyen yen phuong anh",
        department: "APP",
        roomNumber: "",
        luckyNumber: "327"
    },
    {
        name: "pham thi dung",
        department: "APP",
        roomNumber: "",
        luckyNumber: "328"
    },
    {
        name: "gail jones",
        department: "APP",
        roomNumber: "",
        luckyNumber: "329"
    },
    {
        name: "thai my phuoc",
        department: "FW",
        roomNumber: "",
        luckyNumber: "330"
    },
    {
        name: "nguyen thi quynh nga",
        department: "FW",
        roomNumber: "",
        luckyNumber: "331"
    },
    {
        name: "nguyen thi nhung",
        department: "FW",
        roomNumber: "",
        luckyNumber: "332"
    },
    {
        name: "tran hoang long",
        department: "FW",
        roomNumber: "",
        luckyNumber: "333"
    },
    {
        name: "mignano kevin matthew",
        department: "FW",
        roomNumber: "",
        luckyNumber: "334"
    },
    {
        name: "nguyen luu cat trieu",
        department: "FW",
        roomNumber: "",
        luckyNumber: "335"
    },
    {
        name: "vo tien loc",
        department: "FW",
        roomNumber: "",
        luckyNumber: "336"
    },
    {
        name: "doan thi thuy tien",
        department: "FW",
        roomNumber: "",
        luckyNumber: "337"
    },
    {
        name: "do anh hoang",
        department: "FW",
        roomNumber: "",
        luckyNumber: "338"
    },
    {
        name: "nguyen huu thuan",
        department: "FW",
        roomNumber: "",
        luckyNumber: "339"
    },
    {
        name: "nguyen kim huyen",
        department: "FW",
        roomNumber: "",
        luckyNumber: "340"
    },
    {
        name: "nguyen xuan dan",
        department: "FW",
        roomNumber: "",
        luckyNumber: "341"
    },
    {
        name: "vu ngoc trang",
        department: "FW",
        roomNumber: "",
        luckyNumber: "342"
    },
    {
        name: "james pitcher ethan",
        department: "HR",
        roomNumber: "",
        luckyNumber: "343"
    },
    {
        name: "tran duong thoa",
        department: "HR",
        roomNumber: "",
        luckyNumber: "344"
    },
    {
        name: "nguyen van dung",
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
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