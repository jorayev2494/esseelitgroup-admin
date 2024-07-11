import { onMounted, ref, toRefs, watch } from "vue";
import { useStore } from "vuex";

export default ({ props }) => {
  const store = useStore();
  const { data } = toRefs(props);

  // const data = ref({
  //   title: '',
  //   content: '',
  // });

  // const setModalShowData = (nV, oV) => {
  //   console.log('nV: ', nV, 'oV: ', oV);

  //   if (! nV) {
  //     return;
  //   }

  //   store.dispatch('announcement/viewAnnouncementAsync', { uuid: nV })
  //     .then(response => {
  //       data.value.title = response.data.title;
  //       data.value.content = response.data.content;
  //     })
  // }

  // watch(uuid, setModalShowData)

  // onMounted(setModalShowData)

  return {
    data,

    // setModalShowData,
  }
}
