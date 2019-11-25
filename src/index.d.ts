import Vue, { PluginFunction } from 'vue'

declare module 'vue-idle-runner' {
  export const install: PluginFunction<never>
}

declare module 'vue-idle-runner/mixins' {
  export const idle: any;
  export const onLoadIdle: any;
}

declare module "vue/types/vue" {
  interface Vue {
    $idleQueue: (() => boolean)
  }
}