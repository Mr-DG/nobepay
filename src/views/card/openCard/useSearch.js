import { ref } from 'vue'
export const useSearch = () => {
  const searchList = ref({
    firstName: {
      type: 'input',
      key: 'firstName',
      label: 'FirstName',
      value: '',
      placeholder: '请输入FirstName',
      rule: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入FirstName"
      }
    },
    lastName: {
      type: 'input',
      key: 'lastName',
      label: 'LastName',
      value: '',
      placeholder: '请输入LastName',
      rule: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入LastName"
      }
    },
    addr: {
      type: 'input',
      key: 'addr',
      label: '街道地址',
      value: '',
      placeholder: '请输入街道地址',
      rules: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入街道地址"
      }
    },
    city: {
      type: 'input',
      key: 'city',
      label: '城市',
      value: '',
      placeholder: '请输入城市',
      rules: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入城市"
      }
    },
    email: {
      type: 'input',
      key: 'email',
      label: '邮箱',
      value: '',
      placeholder: '请输入邮箱',
      rules: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入邮箱"
      }
    },
  })
  return {
    searchList
  }
}
