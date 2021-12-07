export interface ValidatoRule {
  name: string
  validator: (val: any) => boolean
  message: (name?: string) => string
}

export const required: ValidatoRule = {
  name: 'required',
  validator: (val: any) => {
    if (val === '' || val === undefined || val === null) {
      return false
    }
    return true
  },
  message: (name: string = '此项') => `${name}不能为空`
}

export const email: ValidatoRule = {
  name: 'email',
  validator: (val: string) => {
    const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    return emailReg.test(val)
  },
  message: () => '请输入正确的邮箱'
}
