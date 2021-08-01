import { defineComponent } from "vue";
import  Warikan  from './components/warikan.vue'
import  Footer  from './components/Footer.vue';
export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <h1 class="text-center text-3xl font-bold pt-8">らんだむわりかんあぷり</h1>
          <div class="flex flex-col justify-centerm-4 min-h-screen">
            <div class="flex-grow">
            <Warikan />
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
})