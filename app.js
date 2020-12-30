/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 14:39:34
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 15:37:36
 */
const express = require('express')
const app = express()

const { resolve } = require('path')
app.use('/', express.static(resolve(__dirname, './src')))

app.listen(3000, () => {
  console.log('server is running...')
})