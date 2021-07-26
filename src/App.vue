<script lang="tsx">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/logo.png'
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="warikan-random" /> 
      </>
    )
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
