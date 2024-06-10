import { ref, toRefs } from "vue";

export default ({ props, emits }) => {

  const currentDate = ref(new Date());
  const currentDateOne = ref(new Date());

  const startdate = ref(currentDate);
  const startdateOne = ref(currentDateOne);
  const dateFormat = ref("dd-MMref-yyyy");
  const isHiddenuser = ref(true);
  const isHiddendate = ref(true);
  const isHiddenstatus = ref(true);
  const isHiddencategory = ref(true);

  // // Filter Example
  // const filters = ref([
  //   {
  //     visibleSelectBox: false,
  //     label: 'Select Item',
  //     name: 'company_uuids',
  //     type: 'checkbox',
  //     icon: 'fa-user-plus',
  //     searchable: false,
  //     searchLabel: 'Customer Search Item',
  //     labelKey: 'label',
  //     valueKey: 'value',
  //     value: [
  //       "uuid-uuid-uuid-uuid-2",
  //     ],
  //     items: [
  //       {
  //         label: 'Item name',
  //         value: 'uuid-uuid-uuid-uuid'
  //       },
  //       {
  //         label: 'Item name 2',
  //         value: 'uuid-uuid-uuid-uuid-2'
  //       },
  //       {
  //         label: 'Item name 3',
  //         value: 'uuid-uuid-uuid-uuid-3'
  //       },
  //     ],
  //   },
    // {
    //   visibleSelectBox: false,
    //   label: 'Group Degree',
    //   name: 'department_uuids',
    //   type: 'group-checkbox',
    //   // icon: 'fa-university',
    //   searchable: false,
    //   searchLabel: 'Group Degree Search',
    //   labelKey: 'label',
    //   valueKey: 'value',
    //   value: [],
    //   items: [
    //     {
    //       label: 'Group name',
    //       value: 'group-group-group-group',
    //       selected: false,
    //       items: [
    //         {
    //           label: 'Group name',
    //           value: 'group-group-group-group',
    //         },
    //         {
    //           label: 'Group name 2',
    //           value: 'group-group-group-group-2',
    //         },
    //         {
    //           label: 'Group name 3',
    //           value: 'group-group-group-group-3',
    //         },
    //       ]
    //     },
    //   ],
    // },
  // ])

  const {
    filters,
  } = toRefs(props)

  const changeVisibleSelectBox = (filter, value) => {
    filter.visibleSelectBox = value
  }

  const toggleVisibleSelectBox = (filter, idx) => {
    filters.value.forEach((f, i) => {
      if (i !== idx) {
        changeVisibleSelectBox(f, false)
      }
    });

    filter.visibleSelectBox = !filter.visibleSelectBox
  }

  const changeValue = (filter, gItem, item) => {
    const { labelKey, valueKey, items } = filter;

    if (! filter.value.includes(gItem[valueKey])) {
      filter.value.push(gItem[valueKey]);
    } else {
      filter.value = filter.value.filter(i => i !== gItem[valueKey])
    }

    item.selected = item.items.length === filter.value.length
  }

  /**
   * @param {Object} filter
   * @param {Number} idx 
   */
  const changeGroup = (filter, idx) => {
    const { labelKey, valueKey, items } = filter;

    const group = items[idx];

    // group.items.forEach(item => {
    //   changeValue(filter, item, group)
    //   // filter.value = filter.value.filter(i => i !== item[valueKey])
    // })

    if (group.selected) {
      group.items.forEach(item => {
        filter.value = filter.value.filter(i => i !== item[valueKey])
      })
    } else {
      group.items.forEach(item => {
        filter.value.push(item[valueKey])
      })
    }

    filter.items[idx].selected = !filter.items[idx].selected;
  }

  const filterHandler = () => {
    const result = {}

    filters.value.forEach((f) => {
      // if (type === 'checkbox') {
        result[f.name] = f.value
      // }

      changeVisibleSelectBox(f, false)
    });

    emits('filter', result)
  }

  const clearFilter = filter => {
    filter.value = []

    if (filter.type === 'group-checkbox') {
      filter.items.forEach(item => {
        item.selected = false
      })
    }
  }

  const clear = () => {
    // filters.value.forEach(filter => {
    //   filter.value = []

    //   if (filter.type === 'group-checkbox') {
    //     filter.items.forEach(item => {
    //       item.selected = false
    //     })
    //   }
    // });

    filters.value.forEach(clearFilter)

    emits('filter', {})
  }

  return {
    startdate,
    startdateOne,
    dateFormat,
    isHiddenuser,
    isHiddendate,
    isHiddenstatus,
    isHiddencategory,

    filters,

    changeValue,
    changeGroup,
    toggleVisibleSelectBox,
    filterHandler,
    clearFilter,
    clear,
  }
}