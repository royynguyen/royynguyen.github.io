"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
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
            padding: "15px 0px",
            bgcolor: "black",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Link, {
                    href: "#",
                    underline: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Typography, {
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

;// CONCATENATED MODULE: ./pages/_app.tsx







const sheetID = "1QVK8lhkrPPF-PEZPYpWclhEffLWyt24I";
const departments = [
    {
        label: " ",
        value: " "
    },
    {
        label: " ",
        value: " "
    },
    {
        label: " ",
        value: " "
    },
    {
        label: " ",
        value: " "
    }
];
function MyApp({ Component , pageProps  }) {
    const [mode, setMode] = external_react_default().useState("light");
    const [userName, setUserName] = external_react_default().useState("");
    const theme = external_react_default().useMemo(()=>(0,material_namespaceObject.createTheme)(mode === "light" ? lightTheme : darkTheme), [
        mode
    ]);
    const colorMode = external_react_default().useMemo(()=>({
            toggleColorMode: ()=>{
                setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
            }
        }), []);
    const onSubmit = (event)=>{
        console.log(userName);
        event.preventDefault();
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${"1lHDJmrpSI8w9_3ky__WSo5kmjXtNcjUOCzko4X7O-mw"}:batchUpdate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //update this token with yours. 
                Authorization: `Bearer ${"ya29.a0AeTM1icfl_SLzBgFPBouHZqcgTi7UMUj9AV9CqE1Ta3xGOApTWHZDG29ygWy4tAxIMIeriS0r5RJfECqsOOaRPzc4E8x3ZtN2h0QATQTB8De3317-4tJ2Ls0wrsYHCEWzwgTU7x2eQ92ttln3oJ4k9FHnOuqaCgYKAf0SARMSFQHWtWOmoRt3va5Gxtpd3Oqc97sOpg0163"}`
            },
            body: JSON.stringify({
                requests: [
                    {
                        repeatCell: {
                            range: {
                                startColumnIndex: 0,
                                endColumnIndex: 1,
                                startRowIndex: 0,
                                endRowIndex: 1,
                                sheetId: 1
                            },
                            cell: {
                                userEnteredValue: {
                                    "numberValue": 10
                                }
                            },
                            fields: "*"
                        }
                    }
                ]
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ColorContext.Provider, {
        value: colorMode,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CssBaseline, {
                    enableColorScheme: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: onSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.Grid, {
                        container: true,
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                paddingBottom: "20px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.TextField, {
                                    id: "userName",
                                    label: "Input your name",
                                    value: userName,
                                    fullWidth: true,
                                    onChange: (event)=>setUserName(event.target.value)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Grid, {
                                item: true,
                                xs: 12,
                                sm: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.Button, {
                                    type: "submit",
                                    fullWidth: true,
                                    sx: {
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        ":hover": {
                                            color: "#000"
                                        }
                                    },
                                    children: "Check In"
                                })
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
var __webpack_exports__ = (__webpack_exec__(9049));
module.exports = __webpack_exports__;

})();