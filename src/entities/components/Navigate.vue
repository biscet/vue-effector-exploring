<script setup lang="ts">
import { $pushHistory } from "@/app/providers/models/history";
import { useUnit } from "effector-vue/composition";
import { watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const path = useUnit($pushHistory);

watch(path, () => {
  router.push(path.value);
});
</script>
