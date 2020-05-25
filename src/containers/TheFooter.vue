<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.liberty-web.co.jp" target="_blank">Liberty</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Liberty Co. Ltd.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">System Produce</span>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
