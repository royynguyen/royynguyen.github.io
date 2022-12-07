"use strict";
(() => {
var exports = {};
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 9832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/sample-data.ts
var sample_data = __webpack_require__(1269);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(1943);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ListDetail.tsx


const ListDetail = ({ item: user  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Detail for ",
                    user.name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "ID: ",
                    user.id
                ]
            })
        ]
    });
/* harmony default export */ const components_ListDetail = (ListDetail);

;// CONCATENATED MODULE: ./pages/users/[id].tsx




const StaticPropsDetail = ({ item , errors  })=>{
    if (errors) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: "Error | Next.js + TypeScript Example",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "red"
                        },
                        children: "Error:"
                    }),
                    " ",
                    errors
                ]
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: `${item ? item.name : "User Detail"} | Next.js + TypeScript Example`,
        children: item && /*#__PURE__*/ jsx_runtime_.jsx(components_ListDetail, {
            item: item
        })
    });
};
/* harmony default export */ const _id_ = (StaticPropsDetail);
const getStaticPaths = async ()=>{
    // Get the paths we want to pre-render based on users
    const paths = sample_data/* sampleUserData.map */.w.map((user)=>({
            params: {
                id: user.id.toString()
            }
        }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
const getStaticProps = async ({ params  })=>{
    try {
        const id = params === null || params === void 0 ? void 0 : params.id;
        const item = sample_data/* sampleUserData.find */.w.find((data)=>data.id === Number(id));
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return {
            props: {
                item
            }
        };
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        };
    }
};


/***/ }),

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ sampleUserData)
/* harmony export */ });
/** Dummy user data. */ const sampleUserData = [
    {
        id: 101,
        name: "Alice"
    },
    {
        id: 102,
        name: "Bob"
    },
    {
        id: 103,
        name: "Caroline"
    },
    {
        id: 104,
        name: "Dave"
    }
];


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943], () => (__webpack_exec__(9832)));
module.exports = __webpack_exports__;

})();