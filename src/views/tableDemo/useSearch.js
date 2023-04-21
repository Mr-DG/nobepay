import { ref } from 'vue'
export const useSearch = () => {
  const searchList = ref({
    name: { type: 'input', key: 'name', label: '姓名', value: '' },
    role: {
      type: 'select', key: 'role', label: '角色', value: [],
      options: [{ label: '开启', value: '0' }, { label: '关闭', value: '1' }]
    },
    dataTime: { type: 'dateTime', key: 'time', label: '时间', value: undefined }
  })
  return {
    searchList
  }
} 