/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 14:48:53
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 17:24:20
 */
import { STATUS } from '../typings/index.js'
import FactoryModal from './modal.js'
;((doc) => {
  const oModal = doc.getElementsByClassName('modal')[0]
  const oBtnGroup = doc.getElementsByClassName('btn-group')[0]
  const factoryModal = new FactoryModal(oModal)

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    oBtnGroup.addEventListener('click', btnClickHandle, false)
  }

  function btnClickHandle(e) {
    const tagName = e.target.tagName.toLowerCase()
    if (tagName === 'button') {
      const status = e.target.dataset.status
      changeStatus(status)
    }
  }

  function changeStatus(status) {
    let modal = null
    switch (status) {
      case STATUS.SUCCESS:
        modal = factoryModal.create({
          type: status,
          title: '成功模态框',
          content: '这是一个成功模态框的文本内容'
        })
        modal.openBaidu('https://www.baidu.com')
        break;
      case STATUS.ERROR:
        modal = factoryModal.create({
          type: status,
          title: '失败模态框',
          content: '这是一个失败模态框的文本内容'
        })
        modal.outputInfo('这是一个错误日志')
        break;
      case STATUS.WARNING:
        modal = factoryModal.create({
          type: status,
          title: '告警模态框',
          content: '这是一个告警模态框的文本内容'
        })
        modal.outputInfo('这是一个告警日志')
        break;
    
      default:
        break;
    }
  }

  init()
})(document)