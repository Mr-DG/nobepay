import { ref } from 'vue'
export const useSearch2 = () => {
  const searchList2 = ref({
    firstName: {
      type: 'input',
      key: 'firstName',
      label: 'FirstName',
      value: '',
      placeholder: '请输入FirstName',
      rules: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入 inputValue"
      }
    },
    lastName: {
      type: 'input',
      key: 'lastName',
      label: 'LastName',
      value: '',
      placeholder: '请输入LastName',
      rules: {
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
    searchList2
  }
}
