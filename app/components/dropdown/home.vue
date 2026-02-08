<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

type Option = {
  label: string;
  value: number;
};

/* ================= PROPS ================= */
const props = defineProps<{
  options: Option[];
  modelValue?: number;
}>();

/* ================= EMIT ================= */
const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const isClicking = ref(false);

/* selected option (sync dengan parent) */
const selected = computed(() => {
  return (
    props.options.find((o) => o.value === props.modelValue) ?? props.options[0]
  );
});

const toggle = () => {
  open.value = !open.value;
};

const select = (item: Option) => {
  emit("update:modelValue", item.value);
  open.value = false;
};

/* close when click outside */
const handleClickOutside = (event: MouseEvent) => {
  if (isClicking.value) {
    isClicking.value = false;
    return;
  }
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    open.value = false;
  }
};

const handleButtonClick = () => {
  isClicking.value = true;
  toggle();
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

  <template>
    <div class="dropdown" ref="dropdownRef">
      <button
        class="dropdown-button rounded-full md:w-full w-auto gap-2"
        @click="handleButtonClick"
      >
        {{ selected?.label || 'Pilih' }}
        <PhCaretDown :size="18" />
      </button>

      <div v-if="open" class="dropdown-menu">
        <div
          v-for="item in props.options"
          :key="item.value"
          class="dropdown-item"
          @click="select(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </template>

<style scoped>
.dropdown {
  position: relative;
  /* min-width: 220px; */
  font-family: sans-serif;
}

.dropdown-button {
  padding: 10px 20px;
  background: #272b35;
  color: #fff;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  margin-top: 6px;
  width: 100%;
  background: #272b35;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #0000004d;
  box-shadow: 0px 8px 12px 6px #00000026;
  overflow: hidden;
  z-index: 10;
  border: 1px solid #161b25;
}

.dropdown-item {
  padding: 10px 14px;
  color: #e5e7eb;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #374151;
}
</style>
