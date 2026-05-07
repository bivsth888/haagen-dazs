/**
 * data.js — All nutrition data for Häagen-Dazs Nutrition Guide
 * © 2025 HDIP, Inc. Internal use only.
 * Source: Official Häagen-Dazs shop nutrition binders (June 2025)
 */

const HD = {

  /* ─────────────────────────────────────────────────────────
     ICE CREAM & SORBET  (27 ice cream + 4 sorbet = 31 total)
     Serving size: 2/3 cup per label
  ───────────────────────────────────────────────────────── */
  iceCream: [
    { name:"Caramel Cone",              type:"ic", cat:"Ice Cream", desc:"Caramel ice cream with chocolate covered cone pieces and caramel swirl",       calories:410, fat:26, satfat:17, chol:95,  sodium:160, carbs:39, fiber:1, sugar:33, added:27, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg, Soy" },
    { name:"Midnight Cookies & Cream",  type:"ic", cat:"Ice Cream", desc:"Chocolate ice cream with fudge and chocolate cookies",                          calories:360, fat:20, satfat:12, chol:100, sodium:150, carbs:40, fiber:2, sugar:33, added:27, protein:7, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg", maySoy:true },
    { name:"Vanilla Chocolate Chip",    type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream swirled with chocolate chips",                                calories:360, fat:24, satfat:14, chol:95,  sodium:85,  carbs:33, fiber:1, sugar:28, added:25, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Dark Cherry Truffle",       type:"ic", cat:"Ice Cream", desc:"Cherry vanilla ice cream swirled with cherry ribbons and soft cocoa truffles",  calories:330, fat:20, satfat:12, chol:90,  sodium:55,  carbs:33, fiber:1, sugar:31, added:25, protein:5, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Brownies à la Mode",        type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream with chocolate brownies",                                     calories:340, fat:19, satfat:10, chol:85,  sodium:135, carbs:37, fiber:1, sugar:29, added:25, protein:6, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg" },
    { name:"Chocolate",                 type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream combined with the finest cocoa",                              calories:310, fat:21, satfat:12, chol:110, sodium:55,  carbs:27, fiber:1, sugar:25, added:19, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Coffee",                    type:"ic", cat:"Ice Cream", desc:"Creamy ice cream blended with Brazilian coffee",                                calories:320, fat:21, satfat:13, chol:105, sodium:65,  carbs:26, fiber:0, sugar:25, added:18, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Coffee Chip",               type:"ic", cat:"Ice Cream", desc:"Coffee ice cream with chocolaty chips",                                         calories:360, fat:23, satfat:15, chol:100, sodium:60,  carbs:32, fiber:1, sugar:30, added:23, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Cookie Dough",              type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream with chunks of cookie dough and chocolaty chips",             calories:380, fat:22, satfat:13, chol:90,  sodium:90,  carbs:41, fiber:1, sugar:33, added:28, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg, Soy" },
    { name:"Cookies & Cream",           type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream with chocolate cookies",                                      calories:330, fat:21, satfat:13, chol:100, sodium:135, carbs:32, fiber:1, sugar:27, added:21, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg" },
    { name:"Irish Cream Brownie",       type:"ic", cat:"Ice Cream", desc:"Irish Cream infused ice cream with chocolate brownie pieces and fudge swirl",   calories:360, fat:22, satfat:11, chol:85,  sodium:120, carbs:38, fiber:1, sugar:31, added:26, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Egg, Wheat", alcohol:true },
    { name:"Mint Chip",                 type:"ic", cat:"Ice Cream", desc:"Mint ice cream with chocolaty chips",                                           calories:370, fat:24, satfat:15, chol:100, sodium:85,  carbs:34, fiber:1, sugar:29, added:25, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Belgian Chocolate",         type:"ic", cat:"Ice Cream", desc:"Dark chocolate ice cream with Belgian chocolate shavings",                      calories:400, fat:27, satfat:16, chol:100, sodium:50,  carbs:39, fiber:3, sugar:34, added:29, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Butter Pecan",              type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream combined with roasted pecans",                                calories:370, fat:27, satfat:12, chol:95,  sodium:130, carbs:26, fiber:1, sugar:21, added:18, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Pecan, Egg" },
    { name:"Dulce de Leche",            type:"ic", cat:"Ice Cream", desc:"Caramel ice cream with caramel swirl",                                          calories:360, fat:21, satfat:14, chol:100, sodium:100, carbs:36, fiber:0, sugar:34, added:28, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"White Choc Raspberry Truffle", type:"ic", cat:"Ice Cream", desc:"White chocolate ice cream with fudge truffles and a swirl of raspberry",    calories:360, fat:20, satfat:12, chol:90,  sodium:80,  carbs:40, fiber:1, sugar:36, added:33, protein:5, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Peppermint Bark",           type:"ic", cat:"Ice Cream", desc:"White chocolate ice cream with peppermint bark and candy pieces",               calories:370, fat:21, satfat:14, chol:90,  sodium:60,  carbs:39, fiber:0, sugar:37, added:32, protein:5, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg, Soy" },
    { name:"Pineapple Coconut",         type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream with pineapple chunks and coconut flavor",                    calories:300, fat:17, satfat:10, chol:85,  sodium:5,   carbs:32, fiber:0, sugar:31, added:24, protein:4, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Pistachio",                 type:"ic", cat:"Ice Cream", desc:"Roasted pistachio nuts gently mixed with pure sweet cream ice cream",           calories:360, fat:25, satfat:12, chol:100, sodium:130, carbs:27, fiber:1, sugar:22, added:18, protein:8, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Pistachio, Egg" },
    { name:"Pralines & Cream",          type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream with caramel swirl and praline pecans",                       calories:340, fat:21, satfat:11, chol:95,  sodium:140, carbs:31, fiber:0, sugar:29, added:23, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Pecan, Egg" },
    { name:"Rocky Road",                type:"ic", cat:"Ice Cream", desc:"Chocolate ice cream with marshmallow swirl and roasted almonds",                calories:380, fat:22, satfat:11, chol:90,  sodium:70,  carbs:40, fiber:2, sugar:32, added:26, protein:7, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Almond, Egg" },
    { name:"Rum Raisin",                type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream combined with rum-soaked raisins",                            calories:320, fat:20, satfat:13, chol:85,  sodium:65,  carbs:29, fiber:0, sugar:26, added:15, protein:5, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Salted Brown Butter Cookie",type:"ic", cat:"Ice Cream", desc:"Brown butter ice cream with milk chocolaty chips and cookie pieces",            calories:360, fat:22, satfat:14, chol:90,  sodium:100, carbs:37, fiber:1, sugar:33, added:28, protein:5, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg, Soy" },
    { name:"Strawberry",                type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream combined with sun-ripened strawberries",                      calories:300, fat:19, satfat:11, chol:90,  sodium:60,  carbs:29, fiber:1, sugar:28, added:20, protein:5, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Vanilla",                   type:"ic", cat:"Ice Cream", desc:"Pure, sweet cream combined with Madagascar vanilla",                            calories:320, fat:21, satfat:13, chol:95,  sodium:75,  carbs:26, fiber:0, sugar:25, added:18, protein:6, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Egg" },
    { name:"Vanilla Swiss Almond",      type:"ic", cat:"Ice Cream", desc:"Vanilla ice cream with chocolate coated almonds",                               calories:370, fat:25, satfat:13, chol:95,  sodium:85,  carbs:30, fiber:1, sugar:25, added:22, protein:7, gf:true,  kosher:true, dairy:true,  allergens:"Milk, Almond, Egg" },
    { name:"NY Strawberry Cheesecake",  type:"ic", cat:"Ice Cream", desc:"Velvety cheesecake ice cream with strawberry swirl and graham cracker crust",  calories:300, fat:20, satfat:12, chol:90,  sodium:105, carbs:44, fiber:0, sugar:24, added:19, protein:4, gf:false, kosher:true, dairy:true,  allergens:"Milk, Wheat, Egg" },
    // SORBETS
    { name:"Mango",                     type:"so", cat:"Sorbet",    desc:"Blended mangos pureed to create refreshing sorbet",                             calories:200, fat:0,  satfat:0,  chol:0,   sodium:5,   carbs:50, fiber:2, sugar:44, added:40, protein:0, gf:true,  kosher:true, dairy:false, allergens:"May contain Milk, Egg" },
    { name:"Raspberry",                 type:"so", cat:"Sorbet",    desc:"Blended raspberries pureed to create sweet but tangy sorbet",                  calories:170, fat:0,  satfat:0,  chol:0,   sodium:20,  carbs:42, fiber:0, sugar:36, added:34, protein:0, gf:true,  kosher:true, dairy:false, allergens:"May contain Milk, Egg" },
    { name:"Strawberry",                type:"so", cat:"Sorbet",    desc:"Blended strawberries pureed to create refreshing sorbet",                      calories:170, fat:0,  satfat:0,  chol:0,   sodium:10,  carbs:42, fiber:2, sugar:36, added:36, protein:0, gf:true,  kosher:true, dairy:false, allergens:"May contain Milk, Egg" },
    { name:"Summer Blueberry & Lemon",  type:"so", cat:"Sorbet",    desc:"Pacific Northwest blueberries blended with bright, zesty lemon",               calories:190, fat:0,  satfat:0,  chol:0,   sodium:30,  carbs:47, fiber:1, sugar:33, added:31, protein:0, gf:true,  kosher:true, dairy:false, allergens:"May contain Milk, Egg" },
  ],

  /* ─────────────────────────────────────────────────────────
     SMOOTHIES  (6 flavors × 2 sizes × 2 bases = 24 entries)
  ───────────────────────────────────────────────────────── */
  smoothies: [
    { name:"Strawberry Banana", base:"Ice Cream", size:"small",   calories:380, fat:11,  satfat:7, chol:50, sodium:50,  carbs:67,  fiber:2, sugar:56, protein:4 },
    { name:"Strawberry Banana", base:"Ice Cream", size:"regular", calories:520, fat:12,  satfat:7, chol:50, sodium:50,  carbs:100, fiber:5, sugar:79, protein:2 },
    { name:"Strawberry Banana", base:"Non-Dairy", size:"small",   calories:310, fat:1,   satfat:0, chol:0,  sodium:15,  carbs:75,  fiber:3, sugar:62, protein:1 },
    { name:"Strawberry Banana", base:"Non-Dairy", size:"regular", calories:450, fat:1.5, satfat:0, chol:0,  sodium:20,  carbs:108, fiber:6, sugar:85, protein:4 },
    { name:"Wildberry",         base:"Ice Cream", size:"small",   calories:350, fat:12,  satfat:7, chol:50, sodium:50,  carbs:58,  fiber:2, sugar:46, protein:4 },
    { name:"Wildberry",         base:"Ice Cream", size:"regular", calories:410, fat:12,  satfat:7, chol:50, sodium:50,  carbs:73,  fiber:2, sugar:58, protein:4 },
    { name:"Wildberry",         base:"Non-Dairy", size:"small",   calories:280, fat:1,   satfat:0, chol:0,  sodium:15,  carbs:67,  fiber:3, sugar:55, protein:1 },
    { name:"Wildberry",         base:"Non-Dairy", size:"regular", calories:350, fat:1,   satfat:0, chol:0,  sodium:20,  carbs:82,  fiber:3, sugar:72, protein:5 },
    { name:"Aloha Mango",       base:"Ice Cream", size:"small",   calories:390, fat:11,  satfat:7, chol:50, sodium:45,  carbs:70,  fiber:3, sugar:55, protein:5 },
    { name:"Aloha Mango",       base:"Ice Cream", size:"regular", calories:450, fat:11,  satfat:7, chol:50, sodium:10,  carbs:85,  fiber:4, sugar:68, protein:5 },
    { name:"Aloha Mango",       base:"Non-Dairy", size:"small",   calories:330, fat:0,   satfat:0, chol:0,  sodium:10,  carbs:82,  fiber:5, sugar:64, protein:2 },
    { name:"Aloha Mango",       base:"Non-Dairy", size:"regular", calories:390, fat:0.5, satfat:0, chol:0,  sodium:15,  carbs:97,  fiber:4, sugar:77, protein:2 },
    { name:"Pomegranate Berry", base:"Ice Cream", size:"small",   calories:330, fat:11,  satfat:7, chol:50, sodium:65,  carbs:56,  fiber:1, sugar:51, protein:4 },
    { name:"Pomegranate Berry", base:"Ice Cream", size:"regular", calories:390, fat:11,  satfat:7, chol:50, sodium:70,  carbs:71,  fiber:1, sugar:65, protein:4 },
    { name:"Pomegranate Berry", base:"Non-Dairy", size:"small",   calories:260, fat:0.5, satfat:0, chol:0,  sodium:35,  carbs:64,  fiber:1, sugar:56, protein:1 },
    { name:"Pomegranate Berry", base:"Non-Dairy", size:"regular", calories:320, fat:0.5, satfat:0, chol:0,  sodium:40,  carbs:79,  fiber:1, sugar:70, protein:1 },
    { name:"Tropical Raspberry",base:"Ice Cream", size:"small",   calories:380, fat:11,  satfat:7, chol:50, sodium:50,  carbs:68,  fiber:2, sugar:58, protein:4 },
    { name:"Tropical Raspberry",base:"Ice Cream", size:"regular", calories:480, fat:11,  satfat:7, chol:50, sodium:55,  carbs:91,  fiber:2, sugar:77, protein:4 },
    { name:"Tropical Raspberry",base:"Non-Dairy", size:"small",   calories:310, fat:0,   satfat:0, chol:0,  sodium:20,  carbs:76,  fiber:1, sugar:63, protein:1 },
    { name:"Tropical Raspberry",base:"Non-Dairy", size:"regular", calories:400, fat:0,   satfat:0, chol:0,  sodium:25,  carbs:99,  fiber:2, sugar:83, protein:1 },
    { name:"Strawberry Mango",  base:"Ice Cream", size:"small",   calories:385, fat:11,  satfat:7, chol:50, sodium:47,  carbs:68,  fiber:2, sugar:56, protein:4 },
    { name:"Strawberry Mango",  base:"Ice Cream", size:"regular", calories:485, fat:12,  satfat:7, chol:50, sodium:50,  carbs:95,  fiber:5, sugar:70, protein:5 },
    { name:"Strawberry Mango",  base:"Non-Dairy", size:"small",   calories:320, fat:1,   satfat:0, chol:0,  sodium:12,  carbs:79,  fiber:3, sugar:65, protein:1 },
    { name:"Strawberry Mango",  base:"Non-Dairy", size:"regular", calories:420, fat:0.5, satfat:0, chol:0,  sodium:18,  carbs:103, fiber:4, sugar:81, protein:2 },
  ],

  /* ─────────────────────────────────────────────────────────
     SHAKES & FROZEN LEMONADES
  ───────────────────────────────────────────────────────── */
  shakes: [
    // SHAKES
    { name:"Ice Cream Shake",         sub:"shake", size:"small",   calories:570,  fat:33, satfat:20, chol:140, sodium:135, carbs:61,  fiber:0, sugar:53,  protein:11 },
    { name:"Ice Cream Shake",         sub:"shake", size:"regular", calories:730,  fat:41, satfat:26, chol:150, sodium:150, carbs:80,  fiber:0, sugar:66,  protein:14 },
    { name:"Belgian Chocolate Shake", sub:"shake", size:"small",   calories:890,  fat:53, satfat:33, chol:185, sodium:210, carbs:90,  fiber:5, sugar:75,  protein:15 },
    { name:"Belgian Chocolate Shake", sub:"shake", size:"regular", calories:1100, fat:68, satfat:43, chol:235, sodium:240, carbs:107, fiber:6, sugar:90,  protein:18 },
    { name:"Caramel Coffee Shake",    sub:"shake", size:"small",   calories:870,  fat:52, satfat:33, chol:215, sodium:290, carbs:87,  fiber:0, sugar:73,  protein:15 },
    { name:"Caramel Coffee Shake",    sub:"shake", size:"regular", calories:1100, fat:68, satfat:42, chol:280, sodium:350, carbs:112, fiber:0, sugar:95,  protein:19 },
    { name:"Caramel Cone Shake",      sub:"shake", size:"small",   calories:870,  fat:49, satfat:34, chol:155, sodium:420, carbs:93,  fiber:0, sugar:72,  protein:13 },
    { name:"Caramel Cone Shake",      sub:"shake", size:"regular", calories:1110, fat:64, satfat:44, chol:200, sodium:420, carbs:118, fiber:0, sugar:91,  protein:16 },
    { name:"Coffee Shake",            sub:"shake", size:"small",   calories:800,  fat:52, satfat:32, chol:275, sodium:190, carbs:73,  fiber:1, sugar:64,  protein:18 },
    { name:"Coffee Shake",            sub:"shake", size:"regular", calories:1040, fat:68, satfat:42, chol:275, sodium:230, carbs:96,  fiber:1, sugar:84,  protein:13 },
    { name:"Coffee Chip Shake",       sub:"shake", size:"small",   calories:780,  fat:47, satfat:30, chol:170, sodium:200, carbs:78,  fiber:0, sugar:65,  protein:16 },
    { name:"Coffee Chip Shake",       sub:"shake", size:"regular", calories:1010, fat:60, satfat:39, chol:220, sodium:240, carbs:101, fiber:1, sugar:83,  protein:12 },
    { name:"Cookies & Cream Shake",   sub:"shake", size:"small",   calories:720,  fat:42, satfat:25, chol:170, sodium:260, carbs:71,  fiber:1, sugar:57,  protein:15 },
    { name:"Cookies & Cream Shake",   sub:"shake", size:"regular", calories:940,  fat:55, satfat:33, chol:220, sodium:330, carbs:95,  fiber:1, sugar:74,  protein:14 },
    { name:"Dulce Shake",             sub:"shake", size:"small",   calories:800,  fat:44, satfat:28, chol:185, sodium:250, carbs:86,  fiber:0, sugar:73,  protein:17 },
    { name:"Dulce Shake",             sub:"shake", size:"regular", calories:1020, fat:57, satfat:37, chol:235, sodium:300, carbs:110, fiber:0, sugar:93,  protein:16 },
    { name:"Mocha Shake",             sub:"shake", size:"small",   calories:810,  fat:46, satfat:27, chol:280, sodium:160, carbs:82,  fiber:2, sugar:68,  protein:20 },
    { name:"Mocha Shake",             sub:"shake", size:"regular", calories:1150, fat:72, satfat:45, chol:280, sodium:300, carbs:106, fiber:3, sugar:78,  protein:13 },
    { name:"Pineapple Coconut Shake", sub:"shake", size:"small",   calories:810,  fat:46, satfat:27, chol:200, sodium:160, carbs:87,  fiber:0, sugar:78,  protein:15 },
    { name:"Pineapple Coconut Shake", sub:"shake", size:"regular", calories:1060, fat:60, satfat:36, chol:260, sodium:200, carbs:113, fiber:0, sugar:101, protein:16 },
    // FROZEN LEMONADES
    { name:"Raspberry Frozen Lemonade",       sub:"lemon", size:"small",   calories:320, fat:0,   satfat:0, chol:0, sodium:30, carbs:82,  fiber:0, sugar:68, protein:0 },
    { name:"Raspberry Frozen Lemonade",       sub:"lemon", size:"regular", calories:410, fat:0,   satfat:0, chol:0, sodium:40, carbs:102, fiber:0, sugar:89, protein:0 },
    { name:"Strawberry Frozen Lemonade",      sub:"lemon", size:"small",   calories:320, fat:0,   satfat:0, chol:0, sodium:20, carbs:77,  fiber:3, sugar:67, protein:1 },
    { name:"Strawberry Frozen Lemonade",      sub:"lemon", size:"regular", calories:390, fat:0,   satfat:0, chol:0, sodium:25, carbs:96,  fiber:4, sugar:84, protein:1 },
    { name:"Strawberry Mango Lemonade",       sub:"lemon", size:"small",   calories:340, fat:0,   satfat:0, chol:0, sodium:15, carbs:84,  fiber:3, sugar:75, protein:0 },
    { name:"Strawberry Mango Lemonade",       sub:"lemon", size:"regular", calories:420, fat:0.5, satfat:0, chol:0, sodium:20, carbs:105, fiber:4, sugar:93, protein:0 },
  ],

  /* ─────────────────────────────────────────────────────────
     DAZZLER SUNDAES & SUNDAES
  ───────────────────────────────────────────────────────── */
  sundaes: [
    // DAZZLERS
    { name:"Banana Split Dazzler",   sub:"dazzler", size:"small",   calories:540, fat:32, satfat:20, chol:130, sodium:105, carbs:57,  fiber:3, sugar:43, protein:8  },
    { name:"Banana Split Dazzler",   sub:"dazzler", size:"regular", calories:820, fat:48, satfat:30, chol:195, sodium:160, carbs:88,  fiber:4, sugar:67, protein:12 },
    { name:"Cookies & Cream Dazzler",sub:"dazzler", size:"small",   calories:570, fat:34, satfat:20, chol:130, sodium:270, carbs:60,  fiber:2, sugar:44, protein:8  },
    { name:"Cookies & Cream Dazzler",sub:"dazzler", size:"regular", calories:850, fat:51, satfat:30, chol:195, sodium:390, carbs:87,  fiber:2, sugar:66, protein:12 },
    { name:"Dulce de Leche Dazzler", sub:"dazzler", size:"small",   calories:670, fat:33, satfat:22, chol:140, sodium:220, carbs:87,  fiber:2, sugar:63, protein:9  },
    { name:"Dulce de Leche Dazzler", sub:"dazzler", size:"regular", calories:990, fat:50, satfat:32, chol:205, sodium:320, carbs:126, fiber:4, sugar:92, protein:15 },
    { name:"Midnight C&C Dazzler",   sub:"dazzler", size:"small",   calories:610, fat:37, satfat:24, chol:125, sodium:310, carbs:74,  fiber:4, sugar:57, protein:7  },
    { name:"Midnight C&C Dazzler",   sub:"dazzler", size:"regular", calories:900, fat:54, satfat:36, chol:185, sodium:450, carbs:107, fiber:5, sugar:82, protein:10 },
    { name:"Mint Chip Dazzler",      sub:"dazzler", size:"small",   calories:600, fat:37, satfat:25, chol:125, sodium:230, carbs:61,  fiber:2, sugar:49, protein:9  },
    { name:"Mint Chip Dazzler",      sub:"dazzler", size:"regular", calories:900, fat:56, satfat:37, chol:190, sodium:340, carbs:90,  fiber:2, sugar:72, protein:13 },
    { name:"NY SC Dazzler",          sub:"dazzler", size:"small",   calories:540, fat:37, satfat:22, chol:150, sodium:200, carbs:70,  fiber:2, sugar:37, protein:7  },
    { name:"NY SC Dazzler",          sub:"dazzler", size:"regular", calories:820, fat:56, satfat:33, chol:220, sodium:290, carbs:105, fiber:2, sugar:56, protein:11 },
    { name:"Rocky Road Dazzler",     sub:"dazzler", size:"small",   calories:610, fat:35, satfat:18, chol:110, sodium:210, carbs:65,  fiber:2, sugar:48, protein:10 },
    { name:"Rocky Road Dazzler",     sub:"dazzler", size:"regular", calories:870, fat:51, satfat:27, chol:165, sodium:260, carbs:88,  fiber:3, sugar:68, protein:14 },
    // SUNDAES
    { name:"Hot Fudge Sundae",  sub:"sundae", size:"small",   calories:630, fat:40, satfat:23, chol:220, sodium:210, carbs:58, fiber:4, sugar:51, protein:12 },
    { name:"Hot Fudge Sundae",  sub:"sundae", size:"regular", calories:950, fat:59, satfat:34, chol:330, sodium:320, carbs:85, fiber:1, sugar:75, protein:17 },
    { name:"Caramel Sundae",    sub:"sundae", size:"small",   calories:640, fat:39, satfat:23, chol:220, sodium:230, carbs:60, fiber:2, sugar:50, protein:11 },
    { name:"Caramel Sundae",    sub:"sundae", size:"regular", calories:950, fat:59, satfat:34, chol:220, sodium:340, carbs:89, fiber:1, sugar:73, protein:16 },
  ],

  /* ─────────────────────────────────────────────────────────
     CONES & CUPS  (ranges — nutrition depends on flavor chosen)
  ───────────────────────────────────────────────────────── */
  cones: [
    { name:"Waffle Cone",        size:"mini",    calR:"190-560", fat:"1-20",  satfat:"0-9",  chol:"0-185", sodium:"45-105",  carbs:"38-56",  fiber:"0-2", sugar:"23-25", protein:"1-7",  cMin:190, cMax:560, sMin:23, sMax:25 },
    { name:"Waffle Cone",        size:"small",   calR:"250-500", fat:"1-38",  satfat:"0-17", chol:"0-235", sodium:"65-180",  carbs:"56-75",  fiber:"1-3", sugar:"41-45", protein:"1-5",  cMin:250, cMax:500, sMin:41, sMax:45 },
    { name:"Waffle Cone",        size:"regular", calR:"340-710", fat:"1-57",  satfat:"0-26", chol:"0-235", sodium:"80-260",  carbs:"65-104", fiber:"1-3", sugar:"60-66", protein:"1-20", cMin:340, cMax:710, sMin:60, sMax:66 },
    { name:"Waffle Cone Dipped", size:"mini",    calR:"300-470", fat:"6-24",  satfat:"5-16", chol:"0-66",  sodium:"40-65",   carbs:"39-41",  fiber:"1-3", sugar:"32-34", protein:"1-5",  cMin:300, cMax:470, sMin:32, sMax:34 },
    { name:"Waffle Cone Dipped", size:"small",   calR:"360-580", fat:"6-33",  satfat:"5-22", chol:"0-100", sodium:"40-65",   carbs:"39-55",  fiber:"1-3", sugar:"32-41", protein:"1-5",  cMin:360, cMax:580, sMin:32, sMax:41 },
    { name:"Waffle Cone Dipped", size:"regular", calR:"440-820", fat:"6-47",  satfat:"5-31", chol:"0-150", sodium:"45-80",   carbs:"52-55",  fiber:"1-4", sugar:"44-46", protein:"1-7",  cMin:440, cMax:820, sMin:44, sMax:46 },
    { name:"Sugar Cone",         size:"mini",    calR:"160-330", fat:"0-19",  satfat:"0-9",  chol:"0-80",  sodium:"45-105",  carbs:"26-44",  fiber:"1-2", sugar:"21-23", protein:"1-7",  cMin:160, cMax:330, sMin:21, sMax:23 },
    { name:"Sugar Cone",         size:"small",   calR:"220-470", fat:"0-30",  satfat:"0-17", chol:"0-155", sodium:"65-180",  carbs:"26-65",  fiber:"1-2", sugar:"21-44", protein:"1-15", cMin:220, cMax:470, sMin:21, sMax:44 },
    { name:"Sugar Cone",         size:"regular", calR:"310-680", fat:"0-57",  satfat:"0-26", chol:"0-235", sodium:"80-260",  carbs:"44-92",  fiber:"1-3", sugar:"40-65", protein:"1-20", cMin:310, cMax:680, sMin:40, sMax:65 },
    { name:"Wafer Cone",         size:"mini",    calR:"140-310", fat:"0-19",  satfat:"0-9",  chol:"0-80",  sodium:"30-90",   carbs:"24-42",  fiber:"0-2", sugar:"19-21", protein:"0-7",  cMin:140, cMax:310, sMin:19, sMax:21 },
    { name:"Wafer Cone",         size:"small",   calR:"200-450", fat:"0-38",  satfat:"0-17", chol:"0-155", sodium:"50-170",  carbs:"42-61",  fiber:"1-3", sugar:"38-42", protein:"0-13", cMin:200, cMax:450, sMin:38, sMax:42 },
    { name:"Wafer Cone",         size:"regular", calR:"290-560", fat:"0-56",  satfat:"0-26", chol:"0-235", sodium:"65-240",  carbs:"40-90",  fiber:"1-3", sugar:"34-62", protein:"0-19", cMin:290, cMax:560, sMin:34, sMax:62 },
    { name:"Cup",                size:"mini",    calR:"110-280", fat:"0-18",  satfat:"0-11", chol:"0-65",  sodium:"10-35",   carbs:"26-28",  fiber:"0-2", sugar:"23-24", protein:"0-4",  cMin:110, cMax:280, sMin:23, sMax:24 },
    { name:"Cup",                size:"small",   calR:"170-420", fat:"0-27",  satfat:"0-16", chol:"0-100", sodium:"15-50",   carbs:"26-39",  fiber:"0-2", sugar:"23-34", protein:"0-6",  cMin:170, cMax:420, sMin:23, sMax:34 },
    { name:"Cup",                size:"regular", calR:"260-630", fat:"0-41",  satfat:"0-26", chol:"0-150", sodium:"25-75",   carbs:"39-63",  fiber:"0-4", sugar:"34-56", protein:"0-9",  cMin:260, cMax:630, sMin:34, sMax:56 },
  ],

  /* ─────────────────────────────────────────────────────────
     40 KEY FACTS
  ───────────────────────────────────────────────────────── */
  facts: [
    { cat:"sugar", q:"Which ice cream has the most sugar?",                    a:"<strong>Peppermint Bark</strong> leads all ice creams at <strong>37g sugar</strong> per serving. Among all products, <strong>Mango Sorbet</strong> tops the list at <strong>44g</strong>." },
    { cat:"sugar", q:"Which ice cream has the least sugar?",                   a:"<strong>Butter Pecan</strong> is the lowest-sugar ice cream at <strong>21g</strong>, followed by <strong>Pistachio at 22g</strong> and <strong>NY Strawberry Cheesecake at 24g</strong>." },
    { cat:"sugar", q:"Which sorbet has the most and least sugar?",             a:"<strong>Mango Sorbet</strong> has the most sugar at <strong>44g</strong>. <strong>Summer Blueberry & Lemon Sorbet</strong> has the least at <strong>33g</strong>. Raspberry and Strawberry are in between at <strong>36g</strong> each." },
    { cat:"sugar", q:"Which ice cream has the least added sugar?",             a:"<strong>Rum Raisin</strong> has the lowest added sugars at just <strong>15g</strong> — significantly lower than most flavors which range from 18–33g." },
    { cat:"sugar", q:"Which chocolate ice cream has the least sugar?",         a:"<strong>Chocolate</strong> (plain) has the least sugar among chocolate flavors at <strong>25g</strong>, compared to Midnight Cookies & Cream at 33g, Coffee Chip at 30g, and Belgian Chocolate at 34g." },
    { cat:"sugar", q:"Which vanilla-based ice cream has the most sugar?",      a:"<strong>Peppermint Bark</strong> (white chocolate base) tops at <strong>37g</strong>. Among classic vanilla flavors, <strong>Cookie Dough</strong> is highest at <strong>33g</strong>. New addition <strong>Vanilla Chocolate Chip</strong> is lighter at <strong>28g</strong>." },
    { cat:"sugar", q:"Which ice cream has the most added sugar?",              a:"<strong>White Choc Raspberry Truffle</strong> has the highest added sugars at <strong>33g</strong>, followed by <strong>Peppermint Bark at 32g</strong>. Rum Raisin is the lowest at just <strong>15g</strong> added sugar." },
    { cat:"cal",   q:"Which ice cream has the most calories?",                 a:"<strong>Caramel Cone</strong> (newly added) is now the highest-calorie ice cream at <strong>410 calories</strong>, surpassing Belgian Chocolate at <strong>400 calories</strong>." },
    { cat:"cal",   q:"Which ice cream has the fewest calories?",               a:"<strong>Chocolate</strong> has the fewest calories among ice creams at <strong>310 cal</strong>. All four sorbets are significantly lower at <strong>170–200 cal</strong>." },
    { cat:"cal",   q:"Which ice creams are under 320 calories?",               a:"<strong>Chocolate (310)</strong>, <strong>Pineapple Coconut (300)</strong>, <strong>Strawberry (300)</strong>, and <strong>NY Strawberry Cheesecake (300)</strong> are all under 320 cal." },
    { cat:"cal",   q:"How do sorbets compare to ice creams in calories?",      a:"Sorbets range from <strong>170–200 cal</strong>. Even the lowest-calorie ice cream (Chocolate, 310 cal) has over 50% more calories than the highest-calorie sorbet (Mango, 200 cal)." },
    { cat:"cal",   q:"Which shake has the most and fewest calories?",          a:"<strong>Mocha Shake (regular)</strong> is highest at approximately <strong>1,150 cal</strong>. <strong>Ice Cream Shake (small)</strong> is the lightest shake at <strong>570 cal</strong>. Frozen Lemonades are much lower at <strong>320–420 cal</strong>." },
    { cat:"cal",   q:"Where does Caramel Cone rank among all ice creams?",     a:"<strong>Caramel Cone at 410 cal</strong> is now the highest-calorie ice cream in the lineup, followed by <strong>Belgian Chocolate (400 cal)</strong>, <strong>Cookie Dough (380 cal)</strong>, and <strong>Rocky Road (380 cal)</strong>." },
    { cat:"fat",   q:"Which ice cream has the most fat?",                      a:"<strong>Belgian Chocolate</strong> and <strong>Butter Pecan</strong> tie at <strong>27g fat</strong>. <strong>Caramel Cone</strong> is close behind at <strong>26g</strong>. Belgian Chocolate also has the highest sat fat at <strong>16g</strong>." },
    { cat:"fat",   q:"Which ice cream has the least fat?",                     a:"<strong>Brownies à la Mode</strong> has the least fat at <strong>19g</strong>. All four sorbets are completely <strong>fat-free (0g)</strong>. Midnight Cookies & Cream has a moderate <strong>20g fat</strong>." },
    { cat:"fat",   q:"Which flavors are completely fat-free?",                 a:"All four sorbets — <strong>Mango, Raspberry, Strawberry,</strong> and <strong>Summer Blueberry & Lemon</strong> — have <strong>0g fat</strong>. Frozen Lemonades are also fat-free." },
    { cat:"fat",   q:"Which ice cream has the highest saturated fat?",         a:"<strong>Caramel Cone</strong> has the highest saturated fat of any ice cream at <strong>17g</strong> (85% DV). Belgian Chocolate follows at <strong>16g</strong>. Coffee Chip and Mint Chip are at <strong>15g</strong>." },
    { cat:"prot",  q:"Which ice cream has the most protein?",                  a:"<strong>Pistachio</strong> leads all ice creams with <strong>8g protein</strong>. <strong>Midnight Cookies & Cream</strong> (new) and <strong>Rocky Road</strong> follow at <strong>7g</strong>. Vanilla Swiss Almond also hits <strong>7g</strong>." },
    { cat:"prot",  q:"Which ice cream has the least protein?",                 a:"<strong>Pineapple Coconut</strong> and <strong>NY Strawberry Cheesecake</strong> are lowest at <strong>4g</strong>. All sorbets have <strong>0g protein</strong>. Caramel Cone is low at just <strong>5g</strong>." },
    { cat:"prot",  q:"Do sorbets provide any protein?",                        a:"No — all four sorbets have <strong>0g protein</strong>. Customers looking for protein should choose ice cream, with <strong>Pistachio (8g)</strong> and <strong>Midnight Cookies & Cream (7g)</strong> being top picks." },
    { cat:"prot",  q:"Which smoothie has the most protein?",                   a:"<strong>Wildberry (Non-Dairy, regular)</strong> tops at <strong>5g protein</strong>. Most smoothies range from 1–5g. For higher protein, ice cream is a better choice." },
    { cat:"sod",   q:"Which ice cream has the most sodium?",                   a:"<strong>Caramel Cone</strong> (new) is now the highest at <strong>160mg sodium</strong>, followed by <strong>Pralines & Cream (140mg)</strong>, <strong>Brownies à la Mode (135mg)</strong>, and <strong>Cookies & Cream (135mg)</strong>." },
    { cat:"sod",   q:"Which ice cream has the least sodium?",                  a:"<strong>Pineapple Coconut</strong> has the lowest sodium at just <strong>5mg</strong>. <strong>Mango Sorbet</strong> matches it at <strong>5mg</strong>. The new <strong>Vanilla Chocolate Chip</strong> is also fairly low at <strong>85mg</strong>." },
    { cat:"sod",   q:"Which shake has the most sodium?",                       a:"<strong>Caramel Cone Shake</strong> has the highest sodium of all shakes at <strong>420mg</strong> for both sizes — important to flag for sodium-conscious customers." },
    { cat:"sod",   q:"Which sorbet has the most sodium?",                      a:"<strong>Summer Blueberry & Lemon Sorbet</strong> has the most sodium among sorbets at <strong>30mg</strong> — still very low compared to most ice creams." },
    { cat:"carbs", q:"Which ice cream has the most carbohydrates?",            a:"<strong>NY Strawberry Cheesecake</strong> has the most carbs among ice creams at <strong>44g</strong>. Among all products, <strong>Mango Sorbet</strong> tops out at <strong>50g carbs</strong>." },
    { cat:"carbs", q:"Which ice cream has the fewest carbohydrates?",          a:"<strong>Vanilla</strong>, <strong>Coffee</strong>, and <strong>Butter Pecan</strong> are lowest at <strong>26g carbs</strong> each. New addition <strong>Vanilla Chocolate Chip</strong> is similarly light at <strong>33g</strong>." },
    { cat:"carbs", q:"Which ice cream has the most fiber?",                    a:"<strong>Belgian Chocolate</strong> leads with <strong>3g fiber</strong>. <strong>Midnight Cookies & Cream</strong> (new) has <strong>2g fiber</strong>, same as Rocky Road and Dark Cherry Truffle." },
    { cat:"carbs", q:"Which frozen lemonade has the most carbs?",              a:"<strong>Strawberry Mango Frozen Lemonade (regular)</strong> tops at <strong>105g carbs</strong>. All frozen lemonades are high in carbs due to their natural sugar content." },
    { cat:"carbs", q:"Which sorbet has the most and least carbs?",             a:"<strong>Mango Sorbet</strong> tops at <strong>50g carbs</strong>. <strong>Raspberry</strong> and <strong>Strawberry Sorbet</strong> are lowest at <strong>42g</strong> each. All have 0g fat." },
    { cat:"spec",  q:"Which flavors are non-dairy / vegan-friendly?",          a:"All four sorbets are <strong>non-dairy</strong>: Mango, Raspberry, Strawberry, and Summer Blueberry & Lemon. All smoothies also come in a <strong>Non-Dairy base</strong> option." },
    { cat:"spec",  q:"Which ice creams are gluten-free?",                      a:"GF confirmed: <strong>Chocolate, Coffee, Coffee Chip, Dark Cherry Truffle, Mint Chip, Belgian Chocolate, Butter Pecan, Dulce de Leche, Pineapple Coconut, Pistachio, Rocky Road, Rum Raisin, Strawberry, Vanilla, Vanilla Swiss Almond,</strong> and new addition <strong>Vanilla Chocolate Chip</strong>. NOT GF: Caramel Cone, Midnight Cookies & Cream, and any flavor with cookies, brownies, or graham crust." },
    { cat:"spec",  q:"Which flavor contains alcohol?",                         a:"<strong>Irish Cream Brownie</strong> is the only ice cream containing alcohol — noted as <strong>less than 0.5% by volume</strong>. Still Kosher OU-D certified. Always flag for customers with alcohol-related restrictions." },
    { cat:"spec",  q:"What is the best option for low sugar AND low calorie?", a:"<strong>Raspberry Sorbet (170 cal, 36g sugar)</strong> or <strong>Strawberry Sorbet (170 cal, 36g sugar)</strong> are the best overall. Among ice creams, <strong>Butter Pecan</strong> offers the lowest sugar at <strong>21g</strong> with <strong>370 cal</strong>." },
    { cat:"spec",  q:"Which ice cream is best for high protein + low sugar?",  a:"<strong>Pistachio</strong> is the top pick — highest protein at <strong>8g</strong> and low sugar at <strong>22g</strong>. <strong>Midnight Cookies & Cream</strong> (new) is notable with <strong>7g protein</strong>. <strong>Butter Pecan</strong> has the lowest sugar at <strong>21g</strong> with <strong>6g protein</strong>." },
    { cat:"spec",  q:"Which Dazzler has the least calories?",                  a:"<strong>NY SC Dazzler (small, 540 cal)</strong> and <strong>Banana Split Dazzler (small, 540 cal)</strong> are tied as the lightest Dazzlers. The heaviest is <strong>Dulce de Leche Dazzler (regular) at 990 cal</strong>." },
    { cat:"spec",  q:"Do smoothies have more sugar than ice creams?",          a:"Yes — significantly more. A regular Strawberry Banana smoothie has <strong>79–85g sugar</strong>, compared to ice cream servings which range from <strong>21–37g</strong>. The large volume of fruit drives the sugar content much higher in smoothies." },
  ],
};
