import { ref } from 'vue'
export const useSearch = () => {
  const searchList = ref({
    createdTime: { type: 'dateTime', key: 'time', label: '时间', value: undefined },
    num: { type: 'input', key: 'num', label: '卡序列号', value: '' },
    cardAfterNum: { type: 'input', key: 'cardAfterNum', label: '卡后四位', value: '' },
    paragraph: {
      type: 'select', key: 'paragraph', label: '卡段', value: [],
      options: [{ label: '卡段1', value: '0' }, { label: '卡段2', value: '1' }]
    },
    label: { type: 'input', key: 'label', label: '标签', value: '' }
  })
  return {
    searchList
  }
}
