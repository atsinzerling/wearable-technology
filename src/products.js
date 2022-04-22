
// function fetchShopProducts() {
//     return ({
//
//     })
// }

// export default function fetchShopProducts() {
//     return ({
//         payload: [
//             {
//                 id: 0,
//                 title: 'JavaScript in the Browser',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 1,
//                 title: 'Graph Database',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 6],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 2,
//                 title: 'Full Stack Development',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1, 4],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 3,
//                 title: 'User Interface Design',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 2],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 4,
//                 title: 'JavaScript Development',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 1],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 5,
//                 title: 'User Experience Design',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 2],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//             {
//                 id: 6,
//                 title: 'Advanced OOP',
//                 description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
//                 price: 1.99,
//                 belongsTo: [0, 6],
//                 imageUrl: 'http://via.placeholder.com/80x80'
//             },
//         ]
//     })
// }



// function handleGetJson(){
//     console.log("inside handleGetJson");
//     fetch(`../public/hwd.json`)
//         .then((response) => response.json())
//         .then((messages) => {console.log("messages");});
// }
// handleGetJson();

// fetch('../public/hwd.json').then(response => {
//     console.log(response);
//     return response.json();
// }).then(data => {
//     // Work with JSON data here
//     console.log(data);
// }).catch(err => {
//     // Do something for an error here
//     console.log("Error Reading data " + err);
// });

export const fetchShopProducts = [
    {
        "How_to_find": "Glass cabinet",
        "Device_Name": "Moverio BT-30",
        "Nickname": "MV3",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Moverio BT-30",
        "Overall_Weight": "94",
        "Nose_weight": "70.21%",
        "COM_left_scale": "54",
        "COM_right_scale": "46",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "7.44",
        "Doff_time_to_case": "6.19",
        "Doff_time_to_table": "3.5",
        "Don_time_from_table": "2.97",
        "Doff_time_out_of_eyes": "1.7",
        "Don_time_on_eyes": "1.97"
    },
    {
        "How_to_find": "HWD cabinet",
        "Device_Name": "Optinvent ORA 2",
        "Nickname": "ORA",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "ORA",
        "Overall_Weight": "90",
        "Nose_weight": "40.00%",
        "COM_left_scale": "54",
        "COM_right_scale": "36",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "5.07",
        "Doff_time_to_case": "4.55",
        "Doff_time_to_table": "1.69",
        "Don_time_from_table": "2.78",
        "Doff_time_out_of_eyes": "3",
        "Don_time_on_eyes": "1.03"
    },
    {
        "How_to_find": "Thad's office",
        "Device_Name": "nreal",
        "Nickname": "NRL",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "NRL",
        "Overall_Weight": "114",
        "Nose_weight": "59.65%",
        "COM_left_scale": "50",
        "COM_right_scale": "68",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "7.83",
        "Doff_time_to_case": "7.82",
        "Doff_time_to_table": "2.81",
        "Don_time_from_table": "2.93",
        "Doff_time_out_of_eyes": "1.65",
        "Don_time_on_eyes": "1.73"
    },
    {
        "How_to_find": "Glass cabinet",
        "Device_Name": "Moverio BT-40",
        "Nickname": "MV4",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Moverio BT-40",
        "Overall_Weight": "98",
        "Nose_weight": "85.71%",
        "COM_left_scale": "48",
        "COM_right_scale": "46",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "3.94",
        "Doff_time_to_case": "3.71",
        "Doff_time_to_table": "3.69",
        "Don_time_from_table": "3.35",
        "Doff_time_out_of_eyes": "1.55",
        "Don_time_on_eyes": "2.11"
    },
    {
        "How_to_find": "Gabriel?",
        "Device_Name": "Glass EE2",
        "Nickname": "EE2",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Glass EE2",
        "Overall_Weight": "60",
        "Nose_weight": "30.00%",
        "COM_left_scale": "58",
        "COM_right_scale": "4",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "no case",
        "Doff_time_to_case": "no case",
        "Doff_time_to_table": "1.53",
        "Don_time_from_table": "1.88",
        "Doff_time_out_of_eyes": "1.33",
        "Don_time_on_eyes": "1.45"
    },
    {
        "How_to_find": "HWD cabinet",
        "Device_Name": "vusix m 300 xl",
        "Nickname": "VXL",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Vusix M300 Manual",
        "Overall_Weight": "128",
        "Nose_weight": "51.56%",
        "COM_left_scale": "98",
        "COM_right_scale": "30",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "23.11",
        "Doff_time_to_case": "14.7",
        "Doff_time_to_table": "1.88",
        "Don_time_from_table": "2.4",
        "Doff_time_out_of_eyes": "1.33",
        "Don_time_on_eyes": "1.88"
    },
    {
        "How_to_find": "Talk to Peter Feng or Lukas",
        "Device_Name": "Tooz",
        "Nickname": "TOZ",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Tooz",
        "Overall_Weight": "67",
        "Nose_weight": "65.67%",
        "COM_left_scale": "36",
        "COM_right_scale": "30",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "no case",
        "Doff_time_to_case": "no case",
        "Doff_time_to_table": "2.06",
        "Don_time_from_table": "2.05",
        "Doff_time_out_of_eyes": "1.75",
        "Don_time_on_eyes": "1.68"
    },
    {
        "How_to_find": "Glass cabinet",
        "Device_Name": "Hololens 1",
        "Nickname": "HL1",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "HL1",
        "Overall_Weight": "579",
        "Nose_weight": "N/A",
        "COM_left_scale": "290",
        "COM_right_scale": "288",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "6.43",
        "Doff_time_to_case": "6.05",
        "Doff_time_to_table": "5.35",
        "Don_time_from_table": "",
        "Doff_time_out_of_eyes": "",
        "Don_time_on_eyes": ""
    },
    {
        "How_to_find": "HWD cabinet",
        "Device_Name": "Hololens 2",
        "Nickname": "HL2",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "HL2",
        "Overall_Weight": "566",
        "Nose_weight": "N/A",
        "COM_left_scale": "290",
        "COM_right_scale": "288",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "5.05",
        "Doff_time_to_case": "4.55",
        "Doff_time_to_table": "4.97",
        "Don_time_from_table": "4.09",
        "Doff_time_out_of_eyes": "0.76",
        "Don_time_on_eyes": "0.71"
    },
    {
        "How_to_find": "HWD cabinet",
        "Device_Name": "magic leap 1",
        "Nickname": "MLP",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "ML1",
        "Overall_Weight": "376",
        "Nose_weight": "N/A",
        "COM_left_scale": "160",
        "COM_right_scale": "120",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "no case",
        "Doff_time_to_case": "no case",
        "Doff_time_to_table": "4.6",
        "Don_time_from_table": "3",
        "Doff_time_out_of_eyes": "1.82",
        "Don_time_on_eyes": "1.6"
    },
    {
        "How_to_find": "HWD cabinet",
        "Device_Name": "DreamGlass 4K",
        "Nickname": "DRM",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "DRM",
        "Overall_Weight": "208",
        "Nose_weight": "strapped up",
        "COM_left_scale": "110",
        "COM_right_scale": "94",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "10.16",
        "Doff_time_to_case": "9.54",
        "Doff_time_to_table": "5.07",
        "Don_time_from_table": "7.35",
        "Doff_time_out_of_eyes": "3.24",
        "Don_time_on_eyes": "3.93"
    },
    {
        "How_to_find": "Gabriel or David Martin",
        "Device_Name": "Vuzix Blade",
        "Nickname": "VXB",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Vuzix Blade",
        "Overall_Weight": "96",
        "Nose_weight": "45.83%",
        "COM_left_scale": "48",
        "COM_right_scale": "48",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "10.27",
        "Doff_time_to_case": "12.64",
        "Doff_time_to_table": "3.64",
        "Don_time_from_table": "3.31",
        "Doff_time_out_of_eyes": "2.02",
        "Don_time_on_eyes": "2.68"
    },
    {
        "How_to_find": "On random white cabinet",
        "Device_Name": "Focals by North",
        "Nickname": "FOC",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Focals",
        "Overall_Weight": "68",
        "Nose_weight": "32.35%",
        "COM_left_scale": "38",
        "COM_right_scale": "30",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "7.85",
        "Doff_time_to_case": "7.33",
        "Doff_time_to_table": "5.45",
        "Don_time_from_table": "4.91",
        "Doff_time_out_of_eyes": "2.76",
        "Don_time_on_eyes": "1.85"
    },
    {
        "How_to_find": "Glass cabinet",
        "Device_Name": "glass ee1",
        "Nickname": "EE1",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Glass EE1",
        "Overall_Weight": "50",
        "Nose_weight": "20.00%",
        "COM_left_scale": "46",
        "COM_right_scale": "4",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "4.83",
        "Doff_time_to_case": "4.4",
        "Doff_time_to_table": "2.85",
        "Don_time_from_table": "3.82",
        "Doff_time_out_of_eyes": "1.73",
        "Don_time_on_eyes": "1.84"
    },
    {
        "How_to_find": "",
        "Device_Name": "Glass XE",
        "Nickname": "XE",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "Glass XE",
        "Overall_Weight": "42",
        "Nose_weight": "14.29%",
        "COM_left_scale": "8",
        "COM_right_scale": "34",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "5.57",
        "Doff_time_to_case": "6.94",
        "Doff_time_to_table": "2.14",
        "Don_time_from_table": "2.47",
        "Doff_time_out_of_eyes": "2.37",
        "Don_time_on_eyes": "1.34"
    },
    {
        "How_to_find": "White box glass cabinet",
        "Device_Name": "Sony smartglasses SED-E1",
        "Nickname": "SOS",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "SOS",
        "Overall_Weight": "77",
        "Nose_weight": "75.32%",
        "COM_left_scale": "34",
        "COM_right_scale": "40",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "8.44",
        "Doff_time_to_case": "13.42",
        "Doff_time_to_table": "3.98",
        "Don_time_from_table": "4.45",
        "Doff_time_out_of_eyes": "2.62",
        "Don_time_on_eyes": "2.95"
    },
    {
        "How_to_find": "Glass cabinet",
        "Device_Name": "hmt-1",
        "Nickname": "HMT",
        "Photo_naming_convention": "",
        "Link_to_manufacturer_specs": "HTM1",
        "Overall_Weight": "380",
        "Nose_weight": "N/A",
        "COM_left_scale": "242",
        "COM_right_scale": "138",
        "FOV_Manufacturer_s_aspect_ratio": "",
        "FOV_Manufacturer_s_FOV": "",
        "Don_time_from_case": "13.27",
        "Doff_time_to_case": "14.67",
        "Doff_time_to_table": "6.5",
        "Don_time_from_table": "6.64",
        "Doff_time_out_of_eyes": "N/A",
        "Don_time_on_eyes": "N/A"
    }
]