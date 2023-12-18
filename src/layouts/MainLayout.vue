<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="container">
        <q-toolbar-title>Flights</q-toolbar-title>

        <div
          class="flex items-center q-gutter-lg"
          :class="{ hidden: $q.screen.lt.md }"
        >
          <router-link
            v-for="(menuItem, index) in menuList"
            :key="index"
            :to="menuItem.link"
          >
            <q-icon
              :name="menuItem.icon"
              size="2em"
              class="q-mr-sm"
            />
            {{ menuItem.label }}
          </router-link>
          <q-btn
            unelevated
            @click="changeDarkMode"
          >
            <q-icon :name="!$q.dark.isActive ? 'light_mode' : 'dark_mode'" />
          </q-btn>
        </div>

        <q-btn
          unelevated
          :class="{ hidden: !$q.screen.lt.md }"
          @click="changeDarkMode"
        >
          <q-icon :name="!$q.dark.isActive ? 'light_mode' : 'dark_mode'" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer
      :class="{ hidden: !$q.screen.lt.md }"
      style="position: fixed;"
    >
      <q-tabs>
        <q-route-tab
          v-for="(menuItem, index) in menuList"
          :key="index"
          :to="menuItem.link"
          :icon="menuItem.icon"
          :label="menuItem.label"
          class="col-4"
        />
      </q-tabs>
    </q-footer>

    <q-page-container class="container">
      <router-view class="q-py-md" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import { RouterLink } from 'vue-router'

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    link: '/',
    separator: true
  },
  {
    icon: 'flight',
    label: 'Flights',
    link: '/flights',
    separator: false
  },
  {
    icon: 'dashboard',
    label: 'Dashboard',
    link: '/dashboard',
    separator: false
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: { RouterLink },

  setup() {
    const route = useRoute()
    const currentRouteName = computed(() => route.path)

    const $q = useQuasar()
    const changeDarkMode = () => {
      $q.dark.toggle()
      localStorage.setItem('dark', $q.dark.isActive.toString())
    }

    onMounted(() => {
      $q.dark.set(localStorage.getItem('dark') === 'true')
    })

    return {
      drawer: ref(false),
      menuList,
      currentRouteName,
      changeDarkMode
    }
  }
})
</script>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
</style>
