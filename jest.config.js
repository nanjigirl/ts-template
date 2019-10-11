/*
 * @Description: 添加文件描述
 * @Author: chenxue12
 * @LastEditors: chenxue12
 * @Date: 2019-09-27 16:24:38
 * @LastEditTime: 2019-09-27 16:25:14
 */
module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};