import { Chars } from './chars';

const convert = ((compressed, dict) => {
    const result = new Uint32Array(104448);

    let index = 0;
    let subIndex = 0;

    while (index < 3293) {
        const inst = compressed[index++];
        if (inst < 0) {
            subIndex -= inst;
        } else {
            let code = compressed[index++];
            if (inst & 2) code = dict[code];
            if (inst & 1) {
                result.fill(code, subIndex, subIndex += compressed[index++]);
            } else {
                result[subIndex++] = code;
            }
        }
    }
    return result;
})(
    [-1, 2, 28, 2, 29, 2, 5, -1, 0, 77595648, 3, 41, 2, 3, 0, 14, 2, 52, 2, 53, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 54, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 55, 2, 56, 2, 4, 0, 4294836479, 0, 3221225471, 0, 4294901942, 2, 57, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 20, 2, 0, 2, 59, 2, 0, 2, 125, 2, 6, 2, 19, -1, 2, 60, 2, 148, 2, 1, 3, 0, 3, 0, 4294901711, 2, 37, 0, 4089839103, 0, 2961209759, 0, 268697551, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2965387679, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 167, 2, 3, 0, 3825204735, 0, 123747807, 0, 65487, 2, 3, 0, 4092591615, 0, 1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247020, 2, 64, 0, 4284449919, 0, 851904, 2, 4, 2, 16, 0, 67076095, -1, 2, 65, 0, 1006628014, 0, 4093591391, -1, 0, 50331649, 0, 3265266687, 2, 34, 0, 4294844415, 0, 4278190047, 2, 22, 2, 124, -1, 3, 0, 2, 2, 33, 2, 0, 2, 10, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 66, 2, 0, 2, 67, 2, 68, 2, 69, 2, 0, 2, 70, 2, 0, 0, 3892314111, 0, 261632, 2, 27, 3, 0, 2, 2, 11, 2, 4, 3, 0, 18, 2, 71, 2, 5, 3, 0, 2, 2, 72, 0, 2088959, 2, 31, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 39, 0, 67057664, 3, 0, 2, 2, 9, 2, 0, 2, 32, 2, 0, 2, 18, 2, 7, 0, 268374015, 2, 30, 2, 46, 2, 0, 2, 73, 0, 134153215, -1, 2, 6, 2, 0, 2, 7, 0, 2684354559, 0, 67044351, 0, 1073676416, -2, 3, 0, 2, 2, 40, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 9, 0, 4294960127, 2, 10, 2, 13, -1, 0, 4294377472, 2, 25, 3, 0, 7, 0, 4227858431, 3, 0, 8, 2, 11, 2, 0, 2, 75, 2, 10, 2, 0, 2, 76, 2, 77, 2, 78, -1, 2, 121, 0, 1048577, 2, 79, 2, 12, -1, 2, 12, 0, 131042, 2, 80, 2, 81, 2, 82, 2, 0, 2, 13, -83, 2, 0, 2, 49, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14, 2, 0, 0, 2147516671, 2, 23, 3, 83, 2, 2, 0, -16, 2, 84, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 74, 2, 86, 3, 0, 2, 2, 43, 2, 16, -1, 2, 17, -16, 3, 0, 205, 2, 18, -2, 3, 0, 655, 2, 19, 3, 0, 36, 2, 47, -1, 2, 17, 2, 10, 3, 0, 8, 2, 87, 2, 117, 2, 0, 0, 3220242431, 3, 0, 3, 2, 20, 2, 21, 2, 88, 3, 0, 2, 2, 89, 2, 90, -1, 2, 21, 2, 0, 2, 26, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0, 687865855, 2, 0, 2, 24, 2, 8, 2, 22, 3, 0, 2, 0, 67076097, 2, 7, 2, 0, 2, 23, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 94, 2, 95, 2, 15, 2, 92, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 96, 2, 97, 2, 6, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 25, -1, 0, 3774349439, 2, 98, 2, 99, 3, 0, 2, 2, 20, 2, 100, 3, 0, 10, 2, 10, 2, 17, 2, 0, 2, 42, 2, 0, 2, 26, 2, 101, 2, 27, 0, 1638399, 2, 165, 2, 102, 3, 0, 3, 2, 22, 2, 28, 2, 29, 2, 5, 2, 30, 2, 0, 2, 7, 2, 103, -1, 2, 104, 2, 105, 2, 106, -1, 3, 0, 3, 2, 16, -2, 2, 0, 2, 31, -3, 2, 144, -4, 2, 22, 2, 0, 2, 107, 0, 1, 2, 0, 2, 58, 2, 32, 2, 16, 2, 10, 2, 0, 2, 108, -1, 3, 0, 4, 2, 10, 2, 33, 2, 109, 2, 6, 2, 0, 2, 110, 2, 0, 2, 44, -4, 3, 0, 9, 2, 23, 2, 18, 2, 26, -4, 2, 111, 2, 112, 2, 18, 2, 23, 2, 7, -2, 2, 113, 2, 18, 2, 25, -2, 2, 0, 2, 114, -2, 0, 4277137519, 0, 2265972735, -1, 3, 22, 2, -1, 2, 34, 2, 36, 2, 0, 3, 18, 2, 2, 35, 2, 20, -3, 3, 0, 2, 2, 13, -1, 2, 0, 2, 35, 2, 0, 2, 35, -24, 3, 0, 2, 2, 36, 0, 2147549120, 2, 0, 2, 16, 2, 17, 2, 128, 2, 0, 2, 48, 2, 17, 0, 5242879, 3, 0, 2, 0, 402594847, -1, 2, 116, 0, 1090519039, -2, 2, 118, 2, 119, 2, 0, 2, 38, 2, 37, 2, 2, 0, 3766565279, 0, 2039759, -4, 3, 0, 2, 2, 38, -1, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 9, 2, 39, -1, 0, 3825205247, 2, 40, -11, 3, 0, 2, 0, 2147484671, -8, 2, 0, 2, 7, 0, 4294901888, 2, 0, 0, 67108815, -1, 2, 0, 2, 45, -8, 2, 50, 2, 41, 0, 67043329, 2, 122, 2, 42, 0, 8388351, -2, 2, 123, 0, 3028287487, 0, 67043583, -21, 3, 0, 28, 2, 25, -3, 3, 0, 3, 2, 43, 3, 0, 6, 2, 44, -85, 3, 0, 33, 2, 43, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 45, 2, 7, 2, 39, -2, 2, 17, 2, 46, 2, 0, 2, 23, 0, 67043343, 2, 126, 2, 27, -27, 3, 0, 2, 0, 4294901791, 2, 7, 2, 187, -2, 0, 3, 3, 0, 191, 2, 47, 3, 0, 23, 2, 35, -296, 3, 0, 8, 2, 7, -2, 2, 17, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 127, 0, 1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 48, 2, 0, 2, 129, 2, 130, 2, 51, 2, 0, 2, 131, 2, 132, 2, 133, 3, 0, 10, 2, 134, 2, 135, 2, 15, 3, 48, 2, 3, 49, 2, 3, 50, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 85, 2, 0, 0, 2105343, 0, 4160749584, 2, 194, -42, 0, 4194303871, 0, 2011, -62, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 38, -37, 2, 51, 2, 138, 2, 139, 2, 140, 2, 141, 2, 142, -138, 3, 0, 1334, 2, 23, -1, 3, 0, 129, 2, 31, 3, 0, 6, 2, 10, 3, 0, 180, 2, 143, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 10, -22583, 3, 0, 7, 2, 27, -6130, 3, 5, 2, -1, 0, 69207040, 3, 41, 2, 3, 0, 14, 2, 52, 2, 53, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 54, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 55, 2, 56, 2, 4, 2, 26, -1, 2, 17, 2, 57, -1, 2, 0, 2, 19, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 27, 2, 58, 3, 0, 2, 0, 131135, 2, 91, 0, 70256639, 2, 59, 0, 272, 2, 45, 2, 19, -1, 2, 60, -2, 2, 93, 0, 603979775, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 61, 2, 62, 0, 33554435, 2, 120, 2, 61, 2, 145, 0, 131075, 0, 3594373096, 0, 67094296, 2, 62, -1, 2, 63, 0, 603979263, 2, 153, 0, 3, 0, 4294828001, 0, 602930687, 2, 175, 0, 393219, 2, 63, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 64, 2, 36, -1, 2, 4, 0, 917503, 2, 36, -1, 2, 65, 0, 537783470, 0, 4026531935, -1, 0, 1, -1, 2, 34, 2, 47, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 66, 2, 0, 2, 67, 2, 68, 2, 69, 2, 0, 2, 70, 2, 0, 2, 16, -1, 2, 27, 3, 0, 2, 2, 11, 2, 4, 3, 0, 18, 2, 71, 2, 5, 3, 0, 2, 2, 72, 0, 253951, 3, 20, 2, 0, 122879, 2, 0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 9, 2, 0, 0, 4294903295, 2, 0, 2, 18, 2, 7, -1, 2, 17, 2, 46, 2, 0, 2, 73, 2, 39, -1, 2, 23, 2, 0, 2, 31, -2, 0, 128, -2, 2, 74, 2, 8, 0, 4064, -1, 2, 115, 0, 4227907585, 2, 0, 2, 191, 2, 0, 2, 44, 0, 4227915776, 2, 10, 2, 13, -2, 0, 6544896, 3, 0, 6, -2, 3, 0, 8, 2, 11, 2, 0, 2, 75, 2, 10, 2, 0, 2, 76, 2, 77, 2, 78, -3, 2, 79, 2, 12, -3, 2, 80, 2, 81, 2, 82, 2, 0, 2, 13, -83, 2, 0, 2, 49, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2, 14, 2, 0, 0, 33023, 2, 23, 3, 83, 2, -17, 2, 84, 0, 524157950, 2, 4, 2, 0, 2, 85, 2, 4, 2, 0, 2, 15, 2, 74, 2, 86, 3, 0, 2, 2, 43, 2, 16, -1, 2, 17, -16, 3, 0, 205, 2, 18, -2, 3, 0, 655, 2, 19, 3, 0, 36, 2, 47, -1, 2, 17, 2, 10, 3, 0, 8, 2, 87, 0, 3072, 2, 0, 0, 2147516415, 2, 10, 3, 0, 2, 2, 27, 2, 21, 2, 88, 3, 0, 2, 2, 89, 2, 90, -1, 2, 21, 0, 4294965179, 0, 7, 2, 0, 2, 8, 2, 88, 2, 8, -1, 0, 687603712, 2, 91, 2, 92, 2, 36, 2, 22, 2, 93, 2, 35, 2, 159, 0, 2080440287, 2, 0, 2, 13, 2, 136, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 94, 2, 95, 2, 15, 2, 92, 3, 0, 3, 0, 7, 3, 0, 349, 2, 96, 2, 97, 2, 6, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 25, -1, 0, 2700607615, 2, 98, 2, 99, 3, 0, 2, 2, 20, 2, 100, 3, 0, 10, 2, 10, 2, 17, 2, 0, 2, 42, 2, 0, 2, 26, 2, 101, -3, 2, 102, 3, 0, 3, 2, 22, -1, 3, 5, 2, 2, 30, 2, 0, 2, 7, 2, 103, -1, 2, 104, 2, 105, 2, 106, -1, 3, 0, 3, 2, 16, -2, 2, 0, 2, 31, -8, 2, 22, 2, 0, 2, 107, -1, 2, 0, 2, 58, 2, 32, 2, 18, 2, 10, 2, 0, 2, 108, -1, 3, 0, 4, 2, 10, 2, 17, 2, 109, 2, 6, 2, 0, 2, 110, 2, 0, 2, 44, -4, 3, 0, 9, 2, 23, 2, 18, 2, 26, -4, 2, 111, 2, 112, 2, 18, 2, 23, 2, 7, -2, 2, 113, 2, 18, 2, 25, -2, 2, 0, 2, 114, -2, 0, 4277075969, 2, 8, -1, 3, 22, 2, -1, 2, 34, 2, 137, 2, 0, 3, 18, 2, 2, 35, 2, 20, -3, 3, 0, 2, 2, 13, -1, 2, 0, 2, 35, 2, 0, 2, 35, -24, 2, 115, 2, 9, -2, 2, 115, 2, 27, 2, 17, 2, 13, 2, 115, 2, 36, 2, 17, 0, 4718591, 2, 115, 2, 35, 0, 335544350, -1, 2, 116, 2, 117, -2, 2, 118, 2, 119, 2, 7, -1, 2, 120, 2, 61, 0, 3758161920, 0, 3, -4, 2, 0, 2, 31, 2, 170, -1, 2, 0, 2, 27, 0, 176, -5, 2, 0, 2, 43, 2, 177, -1, 2, 0, 2, 27, 2, 189, -1, 2, 0, 2, 19, -2, 2, 25, -12, 3, 0, 2, 2, 121, -8, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 975, -1, 2, 0, 2, 45, -8, 2, 50, 2, 43, 0, 1, 2, 122, 2, 27, -3, 2, 123, 2, 107, 2, 124, -21, 3, 0, 28, 2, 25, -3, 3, 0, 3, 2, 43, 3, 0, 6, 2, 44, -85, 3, 0, 33, 2, 43, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 45, 2, 7, -3, 2, 17, 2, 125, 2, 0, 2, 27, 2, 44, 2, 126, 2, 27, -27, 3, 0, 2, 0, 65567, -1, 2, 100, -2, 0, 3, 3, 0, 191, 2, 47, 3, 0, 23, 2, 35, -296, 3, 0, 8, 2, 7, -2, 2, 17, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 127, 2, 128, -187, 3, 0, 2, 2, 48, 2, 0, 2, 129, 2, 130, 2, 51, 2, 0, 2, 131, 2, 132, 2, 133, 3, 0, 10, 2, 134, 2, 135, 2, 15, 3, 48, 2, 3, 49, 2, 3, 50, 2, 2, 136, -129, 3, 0, 6, 2, 137, -1, 3, 0, 2, 2, 44, -37, 2, 51, 2, 138, 2, 139, 2, 140, 2, 141, 2, 142, -138, 3, 0, 1334, 2, 23, -1, 3, 0, 129, 2, 31, 3, 0, 6, 2, 10, 3, 0, 180, 2, 143, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 10, -28719, 2, 0, 0, 1, -1, 2, 121, 2, 0, 0, 8193, -21, 0, 50331648, 0, 10255, 0, 4, -11, 2, 62, 2, 163, 0, 1, 0, 71936, -1, 2, 154, 0, 4292933632, 0, 805306431, -5, 2, 144, -1, 2, 172, -1, 0, 6144, -2, 2, 122, -1, 2, 164, -1, 2, 150, 2, 145, 2, 158, 2, 0, 0, 3223322624, 2, 8, 0, 4, -4, 2, 183, 0, 205128192, 0, 1333757536, 0, 3221225520, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4290773055, 0, 278545, 2, 146, 0, 4294886464, 0, 33292336, 0, 417809, 2, 146, 0, 1329579616, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 147, 0, 469762560, 0, 4171219488, 0, 16711728, 2, 147, 0, 202375680, 0, 3214918176, 0, 4294508592, 2, 147, -1, 0, 983584, 0, 48, 0, 58720275, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 171, 2, 0, 0, 17816169, 0, 3288339281, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 144, 0, 4160757760, 2, 0, -6, 2, 160, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 0, 402653184, 2, 152, 2, 155, -2, 2, 156, -20, 0, 3758096385, -2, 2, 185, 0, 4292878336, 2, 21, 2, 148, 0, 4294057984, -2, 2, 157, 2, 149, 2, 168, -2, 2, 166, -1, 2, 174, -1, 2, 162, 2, 121, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 151, 0, 939588608, -1, 0, 805306368, -1, 2, 121, 0, 1610612736, 2, 149, 2, 150, 3, 0, 2, -2, 2, 151, 2, 152, -3, 0, 267386880, -1, 2, 153, 0, 7168, -1, 2, 180, 2, 0, 2, 154, 2, 155, -7, 2, 161, -8, 2, 156, -1, 0, 1426112704, 2, 157, -1, 2, 181, 0, 271581216, 0, 2149777408, 2, 27, 2, 154, 2, 121, 0, 851967, 0, 3758129152, -1, 2, 27, 2, 173, -4, 2, 151, -20, 2, 188, 2, 158, -56, 0, 3145728, 2, 179, 2, 184, 0, 4294443520, 2, 73, -1, 2, 159, 2, 121, -4, 0, 32505856, -1, 2, 160, -1, 0, 2147385088, 2, 21, 1, 2155905152, 2, -3, 2, 91, 2, 0, 2, 161, -2, 2, 148, -6, 2, 162, 0, 4026597375, 0, 1, -1, 0, 1, -1, 2, 163, -3, 2, 137, 2, 190, -2, 2, 159, 2, 164, -1, 2, 169, 2, 121, -6, 2, 121, -213, 2, 162, -657, 2, 158, -36, 2, 165, -1, 0, 65408, -10, 2, 193, -5, 2, 166, -5, 0, 4278222848, 2, 0, 2, 23, -1, 0, 4227919872, -1, 2, 166, -2, 0, 4227874752, 2, 157, -2, 0, 2146435072, 2, 152, -2, 0, 1006649344, 2, 121, -1, 2, 21, 0, 201375744, -3, 0, 134217720, 2, 21, 0, 4286677377, 0, 32896, -1, 2, 167, -3, 2, 168, -349, 2, 169, 2, 170, 2, 171, 3, 0, 264, -11, 2, 172, -2, 2, 155, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524284, -11, 2, 27, -1, 2, 178, -1, 2, 176, 0, 3221291007, 2, 155, -1, 0, 524288, 0, 2158720, -3, 2, 152, 0, 1, -4, 2, 121, 0, 3808625411, 0, 3489628288, 0, 4096, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 164, 0, 120, 0, 7340032, -2, 0, 4026564608, 2, 4, 2, 27, 2, 157, 3, 0, 4, 2, 152, -1, 2, 173, 2, 171, -1, 0, 8176, 2, 174, 2, 164, 2, 175, -1, 0, 4290773232, 2, 0, -4, 2, 157, 2, 182, 0, 15728640, 2, 171, -1, 2, 154, -1, 0, 4294934512, 3, 0, 4, -9, 2, 21, 2, 162, 2, 176, 3, 0, 4, 0, 704, 0, 1849688064, 0, 4194304, -1, 2, 121, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 0, 2080374784, 3, 0, 2, -1, 2, 177, 2, 178, -1, 0, 17829776, 0, 2028994560, 0, 4261478144, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 179, 0, 16252928, 0, 3791388672, 2, 119, 3, 0, 2, -2, 2, 180, 2, 0, -1, 2, 100, -1, 0, 66584576, 3, 0, 11, 2, 121, 3, 0, 12, -2, 0, 245760, 0, 2147418112, -1, 2, 144, 2, 195, 0, 4227923456, -1, 2, 181, 2, 169, 2, 21, -2, 2, 172, 0, 4292870145, 0, 262144, 2, 121, 3, 0, 2, 0, 1073758848, 2, 182, -1, 0, 4227921920, 2, 183, 2, 146, 0, 528402016, 0, 4292927536, 3, 0, 4, -2, 0, 3556769792, 2, 0, -2, 2, 186, 3, 0, 5, -1, 2, 179, 2, 157, 2, 0, -2, 0, 4227923936, 2, 58, -1, 2, 166, 2, 91, 2, 0, 2, 184, 2, 151, 3, 0, 11, -2, 0, 2146959360, 3, 0, 8, -2, 2, 154, -1, 0, 536870960, 2, 115, -1, 2, 185, 3, 0, 8, 0, 512, 0, 8388608, 2, 167, 2, 165, 2, 178, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 186, 3, 0, 21, -28, 2, 155, 3, 0, 3, -3, 0, 4292902912, -6, 2, 93, 3, 0, 85, -33, 2, 187, 3, 0, 126, -18, 2, 188, 3, 0, 269, -17, 2, 185, 2, 121, 0, 4294917120, 3, 0, 2, 2, 27, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 27, -2, 0, 65504, 2, 121, 2, 43, 3, 0, 2, 2, 88, -191, 2, 58, -23, 2, 100, 3, 0, 296, -8, 2, 121, 3, 0, 2, 2, 27, -11, 2, 171, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 155, -7, 2, 162, -1, 0, 384, -1, 0, 133693440, -3, 2, 180, -2, 2, 30, 3, 0, 5, -2, 2, 21, 2, 122, 3, 0, 4, -2, 2, 181, -1, 2, 144, 0, 335552923, 2, 189, -1, 0, 538974272, 0, 2214592512, 0, 132000, -10, 0, 192, -8, 0, 12288, -21, 0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284, 3, 0, 62, -6, 0, 4286578784, 2, 0, -2, 0, 1006696448, 3, 0, 37, 2, 189, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 42, 3, 0, 8, -1, 2, 151, -2, 2, 148, 2, 190, 0, 65537, 2, 162, 2, 165, 2, 159, -1, 2, 151, -1, 2, 58, 2, 0, 2, 191, 0, 65528, 2, 171, 0, 4294770176, 2, 30, 3, 0, 4, -30, 2, 192, 0, 4261470208, -3, 2, 148, -2, 2, 192, 2, 0, 2, 151, -1, 2, 186, -1, 2, 154, 0, 4294950912, 3, 0, 2, 2, 151, 2, 121, 2, 165, 2, 193, 2, 166, 2, 0, 2, 194, 2, 188, 3, 0, 48, -1334, 2, 21, 2, 0, -129, 2, 192, -6, 2, 157, -180, 2, 195, -233, 2, 4, 3, 0, 96, -16, 2, 157, 3, 0, 22583, -7, 2, 17, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828015, 4294967294, 134217726, 268435455, 2147483647, 1048575, 16777215, 1073741823, 1061158911, 536805376, 511, 4294910143, 4160749567, 134217727, 4294901760, 4194303, 2047, 262143, 4286578688, 536870911, 8388607, 4294918143, 67108863, 255, 65535, 67043328, 2281701374, 4294967232, 2097151, 4294903807, 4294902783, 4294967039, 524287, 127, 4294549487, 67045375, 1023, 67047423, 4286578687, 4294770687, 32767, 15, 33554431, 2047999, 8191, 4292870143, 4294934527, 4294966783, 4294967279, 262083, 20511, 4290772991, 4294901759, 41943039, 460799, 4294959104, 71303167, 1071644671, 602799615, 65536, 4294828000, 805044223, 4277151126, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 4294967264, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294868991, 4294909951, 4294967292, 4294965759, 16744447, 4294966272, 4294901823, 4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008, 268369920, 4292804608, 486341884, 4294963199, 3087007615, 1073692671, 131071, 4128527, 4279238655, 4294902015, 4294966591, 2445279231, 3670015, 3238002687, 4294967288, 4294705151, 4095, 3221208447, 4294902271, 4294549472, 2147483648, 4294705152, 4294966143, 64, 16383, 3774873592, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087, 31, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 536870912, 2952790016, 202506752, 139280, 4293918720, 4227922944, 2147532800, 61440, 3758096384, 117440512, 65280, 4227858432, 3233808384, 3221225472, 4294965248, 32768, 57152, 67108864, 4290772992, 25165824, 4160749568, 57344, 4278190080, 65472, 4227907584, 65520, 1920, 4026531840, 49152, 4294836224, 63488, 1073741824, 4294967040, 251658240, 196608, 12582912, 4294966784, 2097152, 64512, 417808, 469762048, 4261412864, 4227923712, 4294934528, 4294967168, 16, 98304, 63, 4292870144, 4294963200, 65534, 65532]
);

export function isvalidIdentifierContinue(code: Chars): boolean {
    return (convert[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
}

export function isValidIdentifierStart(code: Chars): boolean {
    return (convert[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
}

export function isIdentifierStart(ch: Chars): boolean {
    switch (ch) {
        // `A`...`Z`
        case Chars.UpperA:
        case Chars.UpperB:
        case Chars.UpperC:
        case Chars.UpperD:
        case Chars.UpperE:
        case Chars.UpperF:
        case Chars.UpperG:
        case Chars.UpperH:
        case Chars.UpperI:
        case Chars.UpperJ:
        case Chars.UpperK:
        case Chars.UpperL:
        case Chars.UpperM:
        case Chars.UpperN:
        case Chars.UpperO:
        case Chars.UpperP:
        case Chars.UpperQ:
        case Chars.UpperR:
        case Chars.UpperS:
        case Chars.UpperT:
        case Chars.UpperU:
        case Chars.UpperV:
        case Chars.UpperW:
        case Chars.UpperX:
        case Chars.UpperY:
        case Chars.UpperZ:

            // '$'
        case Chars.Dollar:

            // '_'
        case Chars.Underscore:

            //  `a`...`z`
        case Chars.LowerA:
        case Chars.LowerB:
        case Chars.LowerC:
        case Chars.LowerD:
        case Chars.LowerE:
        case Chars.LowerF:
        case Chars.LowerG:
        case Chars.LowerH:
        case Chars.LowerI:
        case Chars.LowerJ:
        case Chars.LowerK:
        case Chars.LowerL:
        case Chars.LowerM:
        case Chars.LowerN:
        case Chars.LowerO:
        case Chars.LowerP:
        case Chars.LowerQ:
        case Chars.LowerR:
        case Chars.LowerS:
        case Chars.LowerT:
        case Chars.LowerU:
        case Chars.LowerV:
        case Chars.LowerW:
        case Chars.LowerX:
        case Chars.LowerY:
        case Chars.LowerZ:
            return true;
        default:
            return isValidIdentifierStart(ch);
    }
}

export function isIdentifierPart(code: Chars): boolean {
    return code >= Chars.UpperA && code <= Chars.UpperZ || code >= Chars.LowerA && code <= Chars.LowerZ ||
        code >= Chars.Zero && code <= Chars.Nine || code === Chars.Dollar || code === Chars.Underscore ||
        isvalidIdentifierContinue(code);
}