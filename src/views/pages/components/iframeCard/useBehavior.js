import { onMounted, toRefs } from "vue";
import { useUrlPattern } from "../../utils/UrlPattern";

export default function useBehavior({ props }) {
  const { file: fileUrlPattern } = useUrlPattern();

  const { file } = toRefs(props);

  const fileMapper = file => {
    if (file === null) {
      return file;
    }

    file.url = fileUrlPattern(file);

    return file;
  }

  onMounted(() => {
    fileMapper(file.value);
  })

  return {
    file
  }
}