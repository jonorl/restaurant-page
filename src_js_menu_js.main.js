"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_js_menu_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* menu css */\n\nh1 {\n  padding: 0;\n  margin: 0;\n  height: fit-content;\n}\n\n.menu-img {\n    display: flex;\n    border:3px solid black;\n    justify-content: center;\n    width: 200px;\n    height: 200px;\n    border-radius: 15px;\n    margin-left: 20px;\n}\n\n#content {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  \n}\n\n.beveragesContainer, .sidesContainer, .mainsContainer, .dessertsContainer {\n    display: grid;\n    grid-auto-flow: column;\n    border: 3px solid white ;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n  }\n\n  .beveragesContainer {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 0.2fr 1fr;\n  }\n\n  .beveragesTitle {\n    grid-column-start: 1;\n    grid-column-end: 4;\n  }\n\n  .sidesContainer {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.2fr 1fr;\n  }\n\n  .sidesTitle {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .mainsContainer {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 0.2fr 1fr;\n  }\n\n  .mainsTitle {\n    grid-column-start: 1;\n    grid-column-end: 5;\n  }\n\n  .dessertsContainer {\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.2fr 1fr;\n  }\n\n  .dessertsTitle {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  [class^=\"beverage-\"], [class^=\"sides-\"], [class^=\"mains-\"], [class^=\"desserts-\"] {\n    display: grid;\n    margin: 2vh;\n  }\n\n  [class^=\"beverage-\"] *, [class^=\"sides-\"] *, [class^=\"mains-\"] *, [class^=\"desserts-\"] * {\n    justify-self: center;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/menu.css?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ \"./src/css/menu.css\");\n/* harmony import */ var _menuImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuImages.js */ \"./src/js/menuImages.js\");\n\n\n\nfunction menu() {\n    // Clear previous content\n    content.textContent = \"\";\n\n    // Create and append the menu heading\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Menu\";\n    content.appendChild(heading);\n\n    // Beverages container\n    const beveragesContainer = document.createElement(\"div\");\n    beveragesContainer.classList.add(\"beveragesContainer\");\n\n    const beveragesTitle = document.createElement(\"div\");\n    beveragesTitle.classList.add(\"beveragesTitle\");\n    beveragesTitle.textContent = \"Beverages\";\n    beveragesContainer.appendChild(beveragesTitle);\n\n    // Beverage one\n    const beverageOne = document.createElement(\"div\");\n    beverageOne.classList.add(\"beverage-one\");\n\n    const beverageOneTitle = document.createElement(\"div\");\n    beverageOneTitle.classList.add(\"title\");\n    beverageOneTitle.textContent = \"Water\";\n    beverageOne.appendChild(beverageOneTitle);\n\n    const beverageOneContent = document.createElement(\"div\");\n    beverageOneContent.classList.add(\"content\");\n    beverageOneContent.textContent = \"Tap water\";\n    beverageOne.appendChild(beverageOneContent);\n\n    const beverageOnePrice = document.createElement(\"div\");\n    beverageOnePrice.classList.add(\"price\");\n    beverageOnePrice.textContent = \"Free\";\n    beverageOne.appendChild(beverageOnePrice);\n\n    const beverageOneImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.water;\n    beverageOneImage.classList.add(\"menu-img\");\n    beverageOne.appendChild(beverageOneImage);\n\n    beveragesContainer.appendChild(beverageOne);\n\n    // Beverage two\n    const beverageTwo = document.createElement(\"div\");\n    beverageTwo.classList.add(\"beverage-two\");\n\n    const beverageTwoTitle = document.createElement(\"div\");\n    beverageTwoTitle.classList.add(\"title\");\n    beverageTwoTitle.textContent = \"Fizzy Water\";\n    beverageTwo.appendChild(beverageTwoTitle);\n\n    const beverageTwoContent = document.createElement(\"div\");\n    beverageTwoContent.classList.add(\"content\");\n    beverageTwoContent.textContent = \"Tap water fizzied with CO2\";\n    beverageTwo.appendChild(beverageTwoContent);\n\n    const beverageTwoPrice = document.createElement(\"div\");\n    beverageTwoPrice.classList.add(\"price\");\n    beverageTwoPrice.textContent = \"£2\";\n    beverageTwo.appendChild(beverageTwoPrice);\n\n    const beverageTwoImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.fizzyWater;\n    beverageTwoImage.classList.add(\"menu-img\");\n    beverageTwo.appendChild(beverageTwoImage);\n\n    beveragesContainer.appendChild(beverageTwo);\n\n    // Beverage three\n    const beverageThree = document.createElement(\"div\");\n    beverageThree.classList.add(\"beverage-three\");\n\n    const beverageThreeTitle = document.createElement(\"div\");\n    beverageThreeTitle.classList.add(\"title\");\n    beverageThreeTitle.textContent = \"Flat white\";\n    beverageThree.appendChild(beverageThreeTitle);\n\n    const beverageThreeContent = document.createElement(\"div\");\n    beverageThreeContent.classList.add(\"content\");\n    beverageThreeContent.textContent = \"Coffee with frothy milk\";\n    beverageThree.appendChild(beverageThreeContent);\n\n    const beverageThreePrice = document.createElement(\"div\");\n    beverageThreePrice.classList.add(\"price\");\n    beverageThreePrice.textContent = \"£3\";\n    beverageThree.appendChild(beverageThreePrice);\n\n    const beverageThreeImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.coffee;\n    beverageThreeImage.classList.add(\"menu-img\");\n    beverageThree.appendChild(beverageThreeImage);\n\n    beveragesContainer.appendChild(beverageThree);\n\n    content.appendChild(beveragesContainer);\n\n    // Sides container\n    const sidesContainer = document.createElement(\"div\");\n    sidesContainer.classList.add(\"sidesContainer\");\n\n    const sidesTitle = document.createElement(\"div\");\n    sidesTitle.classList.add(\"sidesTitle\");\n    sidesTitle.textContent = \"Sides\";\n    sidesContainer.appendChild(sidesTitle);\n\n    // Side one\n    const sidesOne = document.createElement(\"div\");\n    sidesOne.classList.add(\"sides-one\");\n\n    const sidesOneTitle = document.createElement(\"div\");\n    sidesOneTitle.classList.add(\"title\");\n    sidesOneTitle.textContent = \"Salad\";\n    sidesOne.appendChild(sidesOneTitle);\n\n    const sidesOneContent = document.createElement(\"div\");\n    sidesOneContent.classList.add(\"content\");\n    sidesOneContent.textContent = \"Lettuce, tomatoes, carrots and \";\n    sidesOneContent.appendChild(document.createElement(\"br\")); \n    sidesOneContent.appendChild(document.createTextNode(\"avocado with balsamic, oil and salt\"));\n    sidesOne.appendChild(sidesOneContent);\n\n    const sidesOnePrice = document.createElement(\"div\");\n    sidesOnePrice.classList.add(\"price\");\n    sidesOnePrice.textContent = \"£8\";\n    sidesOne.appendChild(sidesOnePrice);\n\n    const sidesOneImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.salad;\n    sidesOneImage.classList.add(\"menu-img\");\n    sidesOne.appendChild(sidesOneImage);\n\n    sidesContainer.appendChild(sidesOne);\n\n    // Side two\n    const sidesTwo = document.createElement(\"div\");\n    sidesTwo.classList.add(\"sides-two\");\n\n    const sidesTwoTitle = document.createElement(\"div\");\n    sidesTwoTitle.classList.add(\"title\");\n    sidesTwoTitle.textContent = \"Rice\";\n    sidesTwo.appendChild(sidesTwoTitle);\n\n    const sidesTwoContent = document.createElement(\"div\");\n    sidesTwoContent.classList.add(\"content\");\n    sidesTwoContent.textContent = \"White boiled rice\";\n    sidesTwo.appendChild(sidesTwoContent);\n\n    const sidesTwoPrice = document.createElement(\"div\");\n    sidesTwoPrice.classList.add(\"price\");\n    sidesTwoPrice.textContent = \"£6\";\n    sidesTwo.appendChild(sidesTwoPrice);\n\n    const sidesTwoImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.rice;\n    sidesTwoImage.classList.add(\"menu-img\");\n    sidesTwo.appendChild(sidesTwoImage);\n\n    sidesContainer.appendChild(sidesTwo);\n\n    content.appendChild(sidesContainer);\n\n    // Mains container\n    const mainsContainer = document.createElement(\"div\");\n    mainsContainer.classList.add(\"mainsContainer\");\n\n    const mainsTitle = document.createElement(\"div\");\n    mainsTitle.classList.add(\"mainsTitle\");\n    mainsTitle.textContent = \"Main Dishes\";\n    mainsContainer.appendChild(mainsTitle);\n\n    // Main one\n    const mainsOne = document.createElement(\"div\");\n    mainsOne.classList.add(\"mains-one\");\n\n    const mainsOneTitle = document.createElement(\"div\");\n    mainsOneTitle.classList.add(\"title\");\n    mainsOneTitle.textContent = \"Poached Eggs\";\n    mainsOne.appendChild(mainsOneTitle);\n\n    const mainsOneContent = document.createElement(\"div\");\n    mainsOneContent.classList.add(\"content\");\n    mainsOneContent.textContent = \"Poached eggs on toast with avocado and salmon\";\n    mainsOne.appendChild(mainsOneContent);\n\n    const mainsOnePrice = document.createElement(\"div\");\n    mainsOnePrice.classList.add(\"price\");\n    mainsOnePrice.textContent = \"£14\";\n    mainsOne.appendChild(mainsOnePrice);\n\n    const mainsOneImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.eggs;\n    mainsOneImage.classList.add(\"menu-img\");\n    mainsOne.appendChild(mainsOneImage);\n\n    mainsContainer.appendChild(mainsOne);\n\n    // Main two\n    const mainsTwo = document.createElement(\"div\");\n    mainsTwo.classList.add(\"mains-two\");\n\n    const mainsTwoTitle = document.createElement(\"div\");\n    mainsTwoTitle.classList.add(\"title\");\n    mainsTwoTitle.textContent = \"Prawn Pasta\";\n    mainsTwo.appendChild(mainsTwoTitle);\n\n    const mainsTwoContent = document.createElement(\"div\");\n    mainsTwoContent.classList.add(\"content\");\n    mainsTwoContent.textContent = \"Pasta with fried prawns and rocket\";\n    mainsTwo.appendChild(mainsTwoContent);\n\n    const mainsTwoPrice = document.createElement(\"div\");\n    mainsTwoPrice.classList.add(\"price\");\n    mainsTwoPrice.textContent = \"£16\";\n    mainsTwo.appendChild(mainsTwoPrice);\n\n    const mainsTwoImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.pasta;\n    mainsTwoImage.classList.add(\"menu-img\");\n    mainsTwo.appendChild(mainsTwoImage);\n\n    mainsContainer.appendChild(mainsTwo);\n\n    // Main three\n    const mainsThree = document.createElement(\"div\");\n    mainsThree.classList.add(\"mains-three\");\n\n    const mainsThreeTitle = document.createElement(\"div\");\n    mainsThreeTitle.classList.add(\"title\");\n    mainsThreeTitle.textContent = \"Chicken Wraps\";\n    mainsThree.appendChild(mainsThreeTitle);\n\n    const mainsThreeContent = document.createElement(\"div\");\n    mainsThreeContent.classList.add(\"content\");\n    mainsThreeContent.textContent = \"Chicken wraps with avocado, cheese, salsa and soured cream\";\n    mainsThree.appendChild(mainsThreeContent);\n\n    const mainsThreePrice = document.createElement(\"div\");\n    mainsThreePrice.classList.add(\"price\");\n    mainsThreePrice.textContent = \"£18\";\n    mainsThree.appendChild(mainsThreePrice);\n\n    const mainsThreeImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.wraps;\n    mainsThreeImage.classList.add(\"menu-img\");\n    mainsThree.appendChild(mainsThreeImage);\n\n    mainsContainer.appendChild(mainsThree);\n\n    // Main Four\n    const mainsFour = document.createElement(\"div\");\n    mainsFour.classList.add(\"mains-Four\");\n\n    const mainsFourTitle = document.createElement(\"div\");\n    mainsFourTitle.classList.add(\"title\");\n    mainsFourTitle.textContent = \"Argie Style Vitel Tonne\";\n    mainsFour.appendChild(mainsFourTitle);\n\n    const mainsFourContent = document.createElement(\"div\");\n    mainsFourContent.classList.add(\"content\");\n    mainsFourContent.textContent = \"Vitello Tonnato - only available at Xmas\";\n    mainsFour.appendChild(mainsFourContent);\n\n    const mainsFourPrice = document.createElement(\"div\");\n    mainsFourPrice.classList.add(\"price\");\n    mainsFourPrice.textContent = \"£16\";\n    mainsFour.appendChild(mainsFourPrice);\n\n    const mainsFourImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.vitel;\n    mainsFourImage.classList.add(\"menu-img\");\n    mainsFour.appendChild(mainsFourImage);\n\n    mainsContainer.appendChild(mainsFour);\n\n    content.appendChild(mainsContainer);\n\n    // Desserts container\n    const dessertsContainer = document.createElement(\"div\");\n    dessertsContainer.classList.add(\"dessertsContainer\");\n\n    const dessertTitle = document.createElement(\"div\");\n    dessertTitle.classList.add(\"dessert\");\n    dessertTitle.textContent = \"Dessert\";\n    dessertsContainer.appendChild(dessertTitle);\n\n    // Dessert one\n    const dessertOne = document.createElement(\"div\");\n    dessertOne.classList.add(\"desserts-one\");\n\n    const dessertOneTitle = document.createElement(\"div\");\n    dessertOneTitle.classList.add(\"title\");\n    dessertOneTitle.textContent = \"Passion Fruit Gelato\";\n    dessertOne.appendChild(dessertOneTitle);\n\n    const dessertOneContent = document.createElement(\"div\");\n    dessertOneContent.classList.add(\"content\");\n    dessertOneContent.textContent = \"Home made\";\n    dessertOne.appendChild(dessertOneContent);\n\n    const dessertOnePrice = document.createElement(\"div\");\n    dessertOnePrice.classList.add(\"price\");\n    dessertOnePrice.textContent = \"£5\";\n    dessertOne.appendChild(dessertOnePrice);\n\n    const dessertOneImage = _menuImages_js__WEBPACK_IMPORTED_MODULE_1__.menuImages.gelato;\n    dessertOneImage.classList.add(\"menu-img\");\n    dessertOne.appendChild(dessertOneImage);\n\n    dessertsContainer.appendChild(dessertOne);\n\n    content.appendChild(dessertsContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/menuImages.js":
/*!******************************!*\
  !*** ./src/js/menuImages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuImages: () => (/* binding */ menuImages)\n/* harmony export */ });\n/* harmony import */ var _images_water_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/water.webp */ \"./src/images/water.webp\");\n/* harmony import */ var _images_fizzy_water_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/fizzy_water.webp */ \"./src/images/fizzy_water.webp\");\n/* harmony import */ var _images_coffee_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/coffee.webp */ \"./src/images/coffee.webp\");\n/* harmony import */ var _images_salad_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/salad.webp */ \"./src/images/salad.webp\");\n/* harmony import */ var _images_rice_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/rice.webp */ \"./src/images/rice.webp\");\n/* harmony import */ var _images_poached_eggs_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/poached_eggs.jpeg */ \"./src/images/poached_eggs.jpeg\");\n/* harmony import */ var _images_prawn_pasta_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/prawn_pasta.jpeg */ \"./src/images/prawn_pasta.jpeg\");\n/* harmony import */ var _images_wraps_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/wraps.webp */ \"./src/images/wraps.webp\");\n/* harmony import */ var _images_vitel_tone_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/vitel_tone.jpg */ \"./src/images/vitel_tone.jpg\");\n/* harmony import */ var _images_gelato_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/gelato.webp */ \"./src/images/gelato.webp\");\n// Import all images from images directory\n\n\n\n\n\n\n\n\n\n\n\n\n// Helper function for the menuImages object\n\nfunction createImageElement(src) {\n    const img = document.createElement(\"img\");\n    img.src = src;\n    img.classList.add(\"menu-img\");\n    return img;\n}\n\n// menuImages object to better handle the images on the menu module\n\nconst menuImages = {\n    water: createImageElement(_images_water_webp__WEBPACK_IMPORTED_MODULE_0__),\n    fizzyWater: createImageElement(_images_fizzy_water_webp__WEBPACK_IMPORTED_MODULE_1__),\n    coffee: createImageElement(_images_coffee_webp__WEBPACK_IMPORTED_MODULE_2__),\n    salad: createImageElement(_images_salad_webp__WEBPACK_IMPORTED_MODULE_3__),\n    rice: createImageElement(_images_rice_webp__WEBPACK_IMPORTED_MODULE_4__),\n    eggs: createImageElement(_images_poached_eggs_jpeg__WEBPACK_IMPORTED_MODULE_5__),\n    pasta: createImageElement(_images_prawn_pasta_jpeg__WEBPACK_IMPORTED_MODULE_6__),\n    wraps: createImageElement(_images_wraps_webp__WEBPACK_IMPORTED_MODULE_7__),\n    vitel: createImageElement(_images_vitel_tone_jpg__WEBPACK_IMPORTED_MODULE_8__),\n    gelato: createImageElement(_images_gelato_webp__WEBPACK_IMPORTED_MODULE_9__)\n};\n\n//# sourceURL=webpack://restaurant-page/./src/js/menuImages.js?");

/***/ }),

/***/ "./src/images/coffee.webp":
/*!********************************!*\
  !*** ./src/images/coffee.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99914556bd5441fac32c.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/coffee.webp?");

/***/ }),

/***/ "./src/images/fizzy_water.webp":
/*!*************************************!*\
  !*** ./src/images/fizzy_water.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a20acbb31f8a9e8a4c3.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fizzy_water.webp?");

/***/ }),

/***/ "./src/images/gelato.webp":
/*!********************************!*\
  !*** ./src/images/gelato.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"383803b611ddb75fd992.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/gelato.webp?");

/***/ }),

/***/ "./src/images/poached_eggs.jpeg":
/*!**************************************!*\
  !*** ./src/images/poached_eggs.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c09d2992c372eb785a92.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/poached_eggs.jpeg?");

/***/ }),

/***/ "./src/images/prawn_pasta.jpeg":
/*!*************************************!*\
  !*** ./src/images/prawn_pasta.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c8e30d2847b12cad508.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/prawn_pasta.jpeg?");

/***/ }),

/***/ "./src/images/rice.webp":
/*!******************************!*\
  !*** ./src/images/rice.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6721986602ca40f4dcc8.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/rice.webp?");

/***/ }),

/***/ "./src/images/salad.webp":
/*!*******************************!*\
  !*** ./src/images/salad.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4815ac1a1513d1625521.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/salad.webp?");

/***/ }),

/***/ "./src/images/vitel_tone.jpg":
/*!***********************************!*\
  !*** ./src/images/vitel_tone.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8fa0785c291dfb2ab7c5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/vitel_tone.jpg?");

/***/ }),

/***/ "./src/images/water.webp":
/*!*******************************!*\
  !*** ./src/images/water.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00e0019d1bf02e6bd273.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/water.webp?");

/***/ }),

/***/ "./src/images/wraps.webp":
/*!*******************************!*\
  !*** ./src/images/wraps.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8afe5ee682789e1e2aed.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/wraps.webp?");

/***/ })

}]);