import MemoForm from '@/components/MemoForm.vue';
<template>
  <MemoForm memo="" mode="新規作成" />
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "NewView",
  components: {
    MemoForm,
  },
  computed: {},
};
</script>
