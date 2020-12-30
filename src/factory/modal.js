/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-29 16:08:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-29 17:21:58
 */
import { STATUS } from '../typings/index.js'
class Modal {
  constructor(type) {
    this.type = type
  }

  get className() {
    return 'modal' + (this.type ? ' '+ this.type : '')
  }

  static checkStatusIsExist(type) {
    return Object.values(STATUS).includes(type)
  }

  static outputInfo(info) {
    console.log(info)
  }
}

class SuccessModal extends Modal {
  constructor({type, title, content}) {
    super(type)
    this.title = title
    this.content = content
  }

  openBaidu(url) {
    setTimeout(() => {
      window.location.href = url
    }, 2000)
  }
}

class ErrorModal extends Modal {
  constructor({type, title, content}) {
    super(type)
    this.title = title
    this.content = content
  }

  outputInfo(error) {
    Modal.outputInfo('错误提示：' + error)
  }
}

class WarningModal extends Modal {
  constructor({type, title, content}) {
    super(type)
    this.title = title
    this.content = content
  }

  outputInfo(waning) {
    Modal.outputInfo('告警提示：' + waning)
  }
}

class FactoryModal {
  constructor(el) {
    this.el = el
  }

  create(options) {
    const type = options.type
    if (!Modal.checkStatusIsExist(type)) {
      throw new Error('this type is not correct.')
    }
    const el = this.el
    let modal = null
    switch (type) {
      case STATUS.SUCCESS:
        modal = new SuccessModal(options)
        break;

      case STATUS.ERROR:
        modal = new ErrorModal(options)
        break;
        
      case STATUS.WARNING:
        modal = new WarningModal(options)
        break;
    
      default:
        break;
    }
    el.querySelector('header').innerText = modal.title
    el.querySelector('.content').innerText = modal.content
    el.className = modal.className

    return {
      outputInfo: modal.outputInfo,
      openBaidu: modal.openBaidu
    }
  }
}

export default FactoryModal