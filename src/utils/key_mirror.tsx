/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
/* eslint-disable header/header */

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */

// Đây là một hàm TypeScript được sử dụng để tạo ra một đối tượng mới, trong đó các khóa đều có cùng giá trị với tên của chúng.

// Hàm này nhận đối tượng 'obj' có kiểu bất kỳ và trả về một đối tượng mới với cùng kiểu dữ liệu nhưng tất cả các giá trị của các khóa đều được đặt bằng tên của chúng.

// Nếu đối tượng được truyền vào không phải là một đối tượng hoặc là một mảng, hàm sẽ ném ra một ngoại lệ với thông báo lỗi.

// Vòng lặp 'for...in' được sử dụng để lặp lại từng khóa trong đối tượng 'obj', kiểm tra xem mỗi khóa có phải là một thuộc tính của 'obj' hay không. Nếu phải, giá trị của khóa được đặt bằng tên của nó.

// Cú pháp '{ [K in keyof T]: K }' được sử dụng để đảm bảo rằng đối tượng trả về có cùng kiểu dữ liệu với đối tượng đầu vào. Nó tạo ra một đối tượng với các khóa có kiểu dữ liệu tương ứng với khóa trong đối tượng đầu vào và giá trị của mỗi khóa đều được đặt là tên khóa đó.

// Ví dụ, nếu đầu vào của hàm là:

// const obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
// };

// Thì đầu ra của hàm sẽ là:

// {
//     key1: 'key1',
//     key2: 'key2',
//     key3: 'key3'
// }

// Điều này có thể hữu ích khi bạn muốn sử dụng tên của các thuộc tính như một chuỗi trong các truy vấn hoặc thông điệp lỗi.

export default function keyMirror<T extends {}>(obj: T): { [K in keyof T]: K } {
    if (!(obj instanceof Object && !Array.isArray(obj))) {
        throw new Error('keyMirror(...): Argument must be an object.');
    }
    const ret: any = {};
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }

        ret[key] = key;
    }
    return ret;
}
